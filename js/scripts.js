//Utility Functions
function getRandomPrice() {
  return Math.random() / 2 + 1;
}

//Store
function Store() {
  this.availableToppings = [
    "cheese",
    "sauce",
    "anchovies",
    "mayonaise",
    "POE-TAY-TOES",
    "corn",
    "fish",
  ];
}

Store.prototype.getTodaysPrices = function () {
  this.availableToppings = this.availableToppings.map(
    (toppingName) => new Topping(toppingName, getRandomPrice())
  );
};

Store.prototype.findTopping = function (toppingName) {
  for (let i = 0; i < this.availableToppings.length; i++) {
    const temp = this.availableToppings[i];
    if (temp.name === toppingName) {
      return temp;
    }
  }
  return false;
};
//Order
//Pizza
function Pizza() {
  this.costOfLarge = 5;
  this.scaledCost = 5;
  this.toppings = [];
  this.size = "L";
}

Pizza.prototype.setSize = function (size) {
  this.size = size;
  this.scaledCost = this.costOfLarge * this.scaleToSize();
};

Pizza.prototype.scaleToSize = function () {
  let scaleFactor;

  switch (this.size) {
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
};

Pizza.prototype.addTopping = function (topping) {
  this.costOfLarge += topping.price;
  this.toppings.push(topping);
  this.setSize(this.size);
};

Pizza.prototype.removeTopping = function (toppingName) {
  for (let i = 0; i < this.toppings.length; i++) {
    const temp = this.toppings[i];
    // console.log(temp.name);
    if (temp.name === toppingName) {
      this.costOfLarge -= temp.price;
      this.toppings.splice(i, 1);
      this.setSize(this.size);
      return true;
    }
  }
  return false;
};

//Topping
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

//globals
const myStore = new Store();
myStore.getTodaysPrices();

const myPizza = new Pizza();
//this will be assigned as a property of a Store object later

//ui logic

//displayStore()
//displayToppingList() -
//displayPizza()
function displayCost() {
  $("#cost-display").text("$" + myPizza.scaledCost.toFixed(2));
}

function renderAvailableToppings() {
  let toppingsHtml = "";
  for (let i = 0; i < myStore.availableToppings.length; i++) {
    console.log(myStore.availableToppings[i].name)
    const temp =
      "<div class='check'>" +
        "<label>" +
          "<input type='checkbox' name='toppings' value='" + myStore.availableToppings[i].name + "' />" +
          "<span> " + myStore.availableToppings[i].name + "</span>" +
        "</label>" +
      "</div>"
    ;
    console.log(temp)
    toppingsHtml += temp;
  }
  // console.log(toppingsHtml)

  $("#checkbox-wrapper").append(toppingsHtml);
}

$(document).ready(function () {
  renderAvailableToppings();
  displayCost();
  //size input
  $("#size-radio-holder").on("input", function () {
    const size = $("input:radio[name=size]:checked").val();
    myPizza.setSize(size);
    displayCost();
  });

  //topping input
  $("input:checkbox").click(function () {
    const toppingName = $(this).val();
    if ($(this).prop("checked")) {
      const topping = myStore.findTopping(toppingName);
      myPizza.addTopping(topping);
    } else {
      myPizza.removeTopping(toppingName);
    }
    displayCost();
  });
});
