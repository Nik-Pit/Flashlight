"use strict";
//DECLARING VARIABLES
let position = document.documentElement;
//ADDING EVENT LISTENERS
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX + "px");
  position.style.setProperty("--y", e.clientY + "px");
});
