//Create a constructor with 4 properties and 3 methods

function Pizza(name, toppings, price, shape, hot, crust, sauce) {
  this.name = name;
  this.toppings = toppings;
  this.price = price;
  this.shape = shape;
  this.slices = slices;
  this.hot = hot;
  this.crust = crust;
  this.sauce = sauce;

  this.order = () => {
    console.log(`May I have ${name}`);
  };

  this.addToppings = () => {
    console.log(`Add all the ${toppings} pleas`);
  };

  this.memes = () => {
    console.log();
  };

  this.estimatedDeliveryTime = () => {};
}

let pizzaOne = new Pizza(
  "super duper lekker pizza",
  ["cheese", "tomato sauce", "olives", "onions", "pineapple"],
  7.9,
  "heart",
  8,
  true,
  "cheezeeeeyyyyy stuffed",
  "gravy"
);
