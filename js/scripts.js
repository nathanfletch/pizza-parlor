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
function Order() {
  this.pizzas = {};
  this.total = 0;
}

Order.prototype.addToOrder = function (pizza) {
  pizza.id = Date.now();
  this.total += pizza.scaledCost;
  this.pizzas[pizza.id] = pizza;
  myPizza = new Pizza();
};
// Order.prototype.removeFromOrder = function () {

// }

//Pizza
function Pizza() {
  this.costOfLarge = 10;
  this.scaledCost = 10;
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
const myOrder = new Order();
let myPizza = new Pizza();

//ui logic
function displayCost() {
  $("#cost-display").text("$" + myPizza.scaledCost.toFixed(2));
}

function renderAvailableToppings() {
  let toppingsHtml = "";
  for (let i = 0; i < myStore.availableToppings.length; i++) {
    const temp =
      "<div class='check'>" +
      "<label>" +
      "<input type='checkbox' name='toppings' value='" +
      myStore.availableToppings[i].name +
      "' /> " +
      myStore.availableToppings[i].name +
      "    <span> $" +
      myStore.availableToppings[i].price.toFixed(2) +
      "</span>" +
      "</label>" +
      "</div>";
    toppingsHtml += temp;
  }

  $("#checkbox-wrapper").append(toppingsHtml);
}

function renderPizzas() {
  let pizzasHtml = Object.keys(myOrder.pizzas).map((key) => {
    let temp = myOrder.pizzas[key];
    return (
      "<li >" +
      temp.size +
      " pizza:" +
      "<br>" +
      "$" +
      temp.scaledCost.toFixed(2) +
      "</li>"
    );
  });
  $("#order-display").empty();
  $("#order-display").append(pizzasHtml.join(""));
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

  $("#add-btn").click(() => {
    myOrder.addToOrder(myPizza);
    renderPizzas();
    $("#total-display").text("$" + myOrder.total.toFixed(2));
  });

  $("#place-form").submit((e) => {
    e.preventDefault();
    const typeOfOrder = $("input:radio[name=delivery]:checked").val();
    let message;
    if (typeOfOrder === "delivery") {
      message = "allow 30 minutes for delivery.";
    } else {
      message = "allow 15 minutes for preparation.";
    }
    $("#main").hide();
    $("#final-display").text(message);
    $("#final").show();
  });
});
