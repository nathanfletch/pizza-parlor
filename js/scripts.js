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

Pizza.prototype.removeTopping = function(topping) {
  for(let i = 0; i < this.toppings.length; i++) {
    if(this.toppings[i].name === topping.name) {
      this.toppings.splice(i, 1);
      this.cost -= topping.price;
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
$(document).ready(function () {
  
});