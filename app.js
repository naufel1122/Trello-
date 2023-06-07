function generate() {  
    var first = document.getElementById('item');
    var second = document.getElementById('Todo').value;
    var item = document.createElement('li');
    item.innerText = second;


    first.appendChild(item);
// console.log(text);
    }
    function remove() {
        var list = document.getElementById("item");
        list.removeChild(list.firstElementChild)
    }