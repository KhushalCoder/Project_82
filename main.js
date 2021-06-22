var mouseEvent = "";


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
canvas.addEventListener("mousedown",myMousedown);

function myMousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove",myMousemove)

function myMousemove(e) {
    current_possition_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_possition_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("current possition of x and y coordinates - ");
        console.log("x =" + current_possition_of_mouse_X + "y =" + current_possition_of_mouse_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_possition_of_mouse_X,current_possition_of_mouse_Y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}


canvas.addEventListener("mouseup",myMouseup);



function myMouseup(e) {
  mouseEvent = "mouseup";  
}


canvas.addEventListener("mouseleave",myMouseleave);



function myMouseleave(e) {
  mouseEvent = "mouseleave" ; 
}