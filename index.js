var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//Math.random() [0,1)

//randomize later
//choosing random coordinates
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

console.log(`targetx: ${targetX}\ntargety: ${targetY}`);


function loc(e){
  console.log(`mousex: ${e.clientX}\nmousey: ${e.clientY}`);
  distance();
}

box.addEventListener("mousemove", loc);

// var d1 = targetX - mousex
// var d2 = targetY - mousey
function distance(targetX, targetY, mousex, mousey){
  var d1 = targetX - mousex;
  var d2 = targetY - mousey;
  return
  Math.floor(Math.sqrt(Math.pow(d1,2) + Math.pow(d2,2)));
}
