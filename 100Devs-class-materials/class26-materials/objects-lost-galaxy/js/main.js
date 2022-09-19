//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.name = "super duper lekker pizza";
pizza.toppings = ["cheese", "tomato sauce", "olives", "onions", "pineapple"];
pizza.price = 7.9;
pizza.shape = "heart";
pizza.slices = "";
pizza.hot = true;
pizza.crust = "cheezeeeeyyyyy stuffed";
pizza.sauce = "gravy";

pizza.order = () => {
  console.log(`May I have ${name}`);
};

pizza.addToppings = () => {
  console.log(`Add all the ${toppings} pleas`);
};

pizza.memes = () => {
  console.log();
};

pizza.estimatedDeliveryTime = () => {};
