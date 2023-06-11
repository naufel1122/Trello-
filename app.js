
let existingTicketObj = localStorage.getItem("tickets");

if (existingTicketObj) {
    existingTicketObj = JSON.parse(existingTicketObj);
} else {
    existingTicketObj = {};
}

let renderExistingTickets = () => {


    // existingTicketObj
    // {
    //     "Todo": [
    //         "abc",
    //         "sdfsdf",
    //         "dsffsdf"
    //     ],
    //     "in progress": [
    //         "jhgdhjdsf",
    //         "dfsdf"
    //     ]
    // }



    for (let key in existingTicketObj) {
        console.log("key: ", key);

        console.log(existingTicketObj[key]);

        existingTicketObj[key].forEach((eachTicket, index) => {
            // create tickets

            let ticketDiv = document.createElement("div")
            ticketDiv.setAttribute("draggable", "true")
            ticketDiv.setAttribute("class", "ticket")
            let t = document.createTextNode(eachTicket);
            ticketDiv.appendChild(t);

            let column = document.getElementById(key)
            column.appendChild(ticketDiv)
            // console.log("column: ", column);

        })

    }





    // column.insertBefore(div, event.target)
}
renderExistingTickets()




let ticketSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = event.target.elements.ticketText.value;


    let div = document.createElement("div")
    div.setAttribute("draggable", "true")
    div.setAttribute("class", "ticket")
    let t = document.createTextNode(userInput);
    div.appendChild(t);

    let column = event.target.parentNode;
    console.log("column: ", column);

    column.insertBefore(div, event.target)

    console.log(event.target.parentNode.children[0].innerText);
    const colTitle = event.target.parentNode.children[0].innerText

    if (!existingTicketObj[colTitle]) {
        existingTicketObj[colTitle] = [];
    }
    existingTicketObj[colTitle].push(userInput);

    localStorage.setItem("tickets", JSON.stringify(existingTicketObj));
    event.target.reset();
    console.log("submit");
}


document
    .querySelectorAll('.addTicketForm')
    .forEach(eachForm => {
        eachForm.addEventListener('submit', ticketSubmitHandler);
    })



let onTheMoveElm = undefined;

let allTickets = document.querySelectorAll(".ticket");

allTickets.forEach(ticketElm => {
    ticketElm.addEventListener('mousedown', function (e) {

        console.log("e.target.className: ", e.target.className);
        onTheMoveElm = e.target;
    })
});

let allColumns = document.querySelectorAll(".column");

allColumns.forEach(columnElm => {

    columnElm.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
        if (event.target.className === "column") {
            event.target.classList.add("column-dropable")
        }
    });
    columnElm.addEventListener("dragleave", (event) => {

        console.log("drag leave event.target.className: ", event.target.className);
        event.preventDefault();
        if (event.target.className.includes("column")) {
            event.target.classList.remove("column-dropable")

        }
    });

    columnElm.addEventListener('drop', function (e) {


        console.log("drop event");
        console.log("e.target.className: ", e.target.className);
        if (event.target.className.includes("column")) {
            e.target.appendChild(onTheMoveElm);
            event.target.classList.remove("column-dropable")

        }
    });


});




