
const button = document.querySelector(".clear")
button.addEventListener("click", event => {
    console.log("clear button pressed");
    var li = document.getElementsByTagName("li");
    console.log(li);
    for (var i = li.length - 1; i >= 0; i--) {
        // Remove first element (at [0]) repeatedly
        li[0].parentNode.removeChild(li[0]);
      }
    
  
})

function newItem(){
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);

    var bolden = false;
   
        if(item.charAt(item.length-1) == '!'){
            bolden = true;
        }

    

    var ul = document.getElementById("list");

    var li = document.createElement("li");

    li.appendChild(document.createTextNode("- " + item));

    li.classList.add("scale-up-hor-left");
    if(bolden){
        li.classList.add("bolden")}

    ul.appendChild(li);

    document.getElementById("input").value="";

    
    li.onclick = removeItem;
    
}

function removeItem(e) {
    
    e.target.remove();
}

//</button>function clear(){
 //   console.log("clear button pressed");
 //   var li = document.getElementsByTagName("li");
   // console.log(li);
 //   for (var i = li.length - 1; i >= 0; i--) {
        // Remove first element (at [0]) repeatedly
 //       li[0].parentNode.removeChild(li[0]);
 //     }
    
//}

document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 13){
        console.log("key pressed");
        newItem();
    }
};