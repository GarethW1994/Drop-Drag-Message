var blockOne = document.querySelector('.block1');
var blockTwo = document.querySelector('.block2');
var dropZone = document.querySelector('.dropZone');
var blocks = document.getElementsByName('blocks');
var dragged;
    
document.addEventListener("drag", function(event){
   //$('.block1').addClass('active');
}, false);

document.addEventListener("dragstart", function(event){
    //store a ref. on the dragged element
    dragged = event.target;
    //make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event){
   //reset transparency
    event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function(event){
    //prevent default to allow drop
    event.preventDefault();
}, false)

dropZone.addEventListener("dragenter", function(event){
   //higlight potential drop target when the draggable element enters it
    if (event.target.className === "dropZone") {
        event.target.style.background ='steelblue';
       // event.target.style.opacity = .3;
    }
}, false);

dropZone.addEventListener("dragleave", function(event){
    //reset drop target when element leaves it
    if (event.target.className === "dropZone") {
        event.target.style.background = "";
    }
}, false);

dropZone.addEventListener("drop", function(event){
   //prevent default action (open as link for some elements)
    event.preventDefault();
    //move dragged elem to the selected drop target
    if (event.target.className === "dropZone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);