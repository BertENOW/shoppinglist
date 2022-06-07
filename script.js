var button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

button.addEventListener("click", function(){
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";
})

input.addEventListener("keypress", function(event){
    if(input.value.length>0 && event.keyCode==13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
    }
})

li.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("done");
    })
});