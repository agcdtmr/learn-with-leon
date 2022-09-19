//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater(
  characName,
  skateBrand,
  skateColor,
  skateClothes,
  skateShoes,
  specialMove
) {
  this.characName = characName;
  this.skateBrand = skateBrand;
  this.skateColor = skateColor;
  this.skateClothes = skateClothes;
  this.skateShoes = skateShoes;
  this.specialMove = specialMove;
  this.kickflipTrick = function () {
    console.log("kiccckkkk,flipppp,trickkkk");
  };
  this.ollieTrick = function () {
    console.log("ollieeeetrickkkkk");
  };
  this.nollieTrick = function () {
    console.log("nollieeeeTrickkkk");
  };
  this.taunt = function () {
    console.log(`DONT MAKE ME USE MY ${specialMove}`);
  };
}

let tonyHawkProSkaterOne = new TonyHawkProSkater();
let tonyHawkProSkaterTwo = new TonyHawkProSkater();
