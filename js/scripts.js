//Store
//Order
//Pizza
function Pizza() {
  this.costOfLarge = 5;
  this.scaledCost =5;
  this.toppings = [];
  this.size = "L";
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
  this.scaledCost = this.costOfLarge * this.scaleToSize();
}

Pizza.prototype.scaleToSize = function() {
  let scaleFactor;

  switch(this.size) {
    case "M":
      scaleFactor = 0.7;
      break;
    case "L":
      scaleFactor = 1;
      break;
    case "XL":
      scaleFactor = 1.3;
      break;
  }

  return scaleFactor;
}

Pizza.prototype.addTopping = function(topping) {
  this.costOfLarge += topping.price;
  this.toppings.push(topping);
}

Pizza.prototype.removeTopping = function(topping) {
  for(let i = 0; i < this.toppings.length; i++) {
    if(this.toppings[i].name === topping.name) {
      this.toppings.splice(i, 1);
      this.costOfLarge -= topping.price;
      return true;
    }
  }
  return false;
}

//Topping
function Topping(name, price) {
  this.name = name;
  this.price = price;
  // this.ounces = weight;
}

//globals
const myPizza = new Pizza();
  //this will be assigned as a property of a Store object later
const cheese = new Topping("cheese", 1);
const sauce = new Topping("sauce", 1);
const anchovies = new Topping("anchovies", 1);
const availableToppings = [cheese, sauce, anchovies];




//ui logic

//displayStore()
//displayToppingList() - 
//displayPizza()
function displayCost() {
  $("#cost-display").text("$" + myPizza.scaledCost.toFixed(2));
}

$(document).ready(function () {

  $("#size-radio-holder").on("input", function() {
    console.log("clicked size");
    const size = $("input:radio[name=size]:checked").val();
    console.log("clicked size" + size);
    myPizza.setSize(size);
    //some display function 
    displayCost();
  });
});