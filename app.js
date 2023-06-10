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
    }
    renderExistingTickets()