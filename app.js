
function newItem(){
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);

    var ul = document.getElementById("list");

    var li = document.createElement("li");

    li.appendChild(document.createTextNode("- " + item));

    li.classList.add("scale-up-hor-left");

    ul.appendChild(li);

    
    li.onclick = removeItem;
    
}

function removeItem(e) {
    
    e.target.remove();
}

document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 13){
        console.log("key pressed");
        newItem();
    }
};