//Store
//Order
//Pizza
function Pizza() {
  this.cost = 5;
  this.toppings = [];
  // this.size = 
}

Pizza.prototype.addTopping = function(topping) {
  this.cost += topping.price;
  this.toppings.push(topping);
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
$(document).ready(function () {
  
});