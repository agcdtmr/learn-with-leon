//Create a dog object that has four properties and three methods

// let dogObj = {};

// dogObj.name = "Boogie";
// dogObj.talent = "run, jump and catch";

// dogObj.doTalent = function (talent) {
//   console.log(`${name}, show your ${talent}!`);
// };

// dogObj.barking = "woooffff woooofff";

// dogObj.doBark = function (barking) {
//   console.log(`${name}, stop ${barking}!`);
// };

// dogObj.rebelLife = "eat, sleep, poop";

// dogObj.rebel = function (beRebel) {
//   console.log(`My dog is something because she ${beRebel}`);
// };

function DogObj(name, talent, barking, rebelLife) {
  this.name = name;
  this.talent = talent;
  this.barking = barking;
  this.rebelLife = rebelLife;
  this.doTalent = function (talent) {
    console.log(`${name}, show your ${talent}!`);
  };
  this.doBark = function (barking) {
      console.log(`${name}, stop ${barking}!`);
    };.
 this.rebel = function (beRebel) {
    console.log(`My dog is something because she ${beRebel}`);
  }; 
}

let dogObjOne = new DogObj ('Boogie', 'run jump and catch', 'woooffff woooofff', 'eat sleep poop')
let dogObjTwo = new DogObj ()
