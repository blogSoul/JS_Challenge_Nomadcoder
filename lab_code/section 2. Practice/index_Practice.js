import "index.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2");
const superEventHandler = {
  MouseUp: function handleMouseUp() {
    h2.style.color = colors[0];
    h2.innerHTML = "The mouse is here!";
  },
  MouseLeave: function handleMouseLeave() {
    h2.style.color = colors[1];
    h2.innerHTML = "The mouse is gone!";
  },
  ContextMenu: function handleContextMenu() {
    h2.style.color = colors[4];
    h2.innerHTML = "That was a right click!";
  },
  Resize: function handleResize() {
    h2.style.color = colors[2];
    h2.innerHTML = "You just resized!";
  }
};

h2.addEventListener("mouseup", superEventHandler["MouseUp"]);
h2.addEventListener("mouseleave", superEventHandler["MouseLeave"]);
window.addEventListener("contextmenu", superEventHandler["ContextMenu"]);
window.addEventListener("resize", superEventHandler["Resize"]);
