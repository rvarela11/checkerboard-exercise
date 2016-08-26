var b = document.getElementsByTagName("body");
var body = b[0];

function makeGrid() {
  for (i = 1; i < 55; i++) {
    var box = document.createElement("div");
    box.style.width = "11.1%";
    box.style.float = "left";
    box.style.paddingBottom = "11.1%";
    if (i % 2 === 0) {
      box.style.background = "red";
    } else {
      box.style.background = "#000";
    }
    body.appendChild(box);
  }
}
makeGrid();

console.log(body);
