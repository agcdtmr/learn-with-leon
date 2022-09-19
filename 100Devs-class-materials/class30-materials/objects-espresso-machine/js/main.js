//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EpressoMachine {
  constructor(grinder, milkThicker, cupSIze, color, make, model, price) {
    this.grinder = grinder;
    this.milkThicker = milkThicker;
    this.cupSIze = cupSIze;
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  bringItOn() {
    console.log("woooohhh espresso");
  }
  gimmeMore() {
    console.log(`coffeeeeee ${this.grinder}`);
  }
  somethingOne() {
    console.log("why people drink coffee");
  }
  turnOn() {
    console.log("i am now own");
  }
  steam() {
    console.log("saleeeee");
  }
  brew() {
    console.log("cominggggg");
  }
}

let espressoOne = new EpressoMachine();
