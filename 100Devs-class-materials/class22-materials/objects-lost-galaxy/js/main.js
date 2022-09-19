//Create a mouse object that has four properties and three methods
let mouse = {};

mouse.brand = "brand";
mouse.model = 1999;
mouse.color = "white";
mouse.click = true;
mouse.wireless = true;
mouse.leftClick = function () {
  console.log("left click");
};
mouse.rightClick = function () {
  console.log("right click");
};
mouse.scrollDown = function () {
  console.log("dowwwwwwn");
};
mouse.scrollUp = function () {
  console.log("upppppp");
};
