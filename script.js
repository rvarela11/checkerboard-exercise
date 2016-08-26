var b = document.getElementsByTagName("body");
var body = b[0];

function makeGrid() {
  for (i = 1; i < 55; i++) {
    var box = document.createElement("div");
    box.style.width = "11.1%";
    box.style.float = "left";
    box.style.paddingBottom = "11.1%";
    var r = Math.floor(Math.random() * 250);
    var g = Math.floor(Math.random() * 250);
    var b = Math.floor(Math.random() * 250);
    box.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    body.appendChild(box);
  }
}
makeGrid();

function color() {
  var boxesColors = document.getElementsByTagName("div");
  for (i = 0; i < boxesColors.length; i++) {
    var r = Math.floor(Math.random() * 250);
    var g = Math.floor(Math.random() * 250);
    var b = Math.floor(Math.random() * 250);
    boxesColors[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
}

setInterval(function() {
  var boxes = document.getElementsByTagName("div");
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = color();
  }
}, 2000);

var audio = new Audio('discoBalls.mp3');
audio.play();
