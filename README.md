# Pizza Parlor
Design your own tasty pizza!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/nathan_fletcher.svg?style=social&label=Follow%20%40nathan_fletcher)](https://twitter.com/nathan_fletcher)

## Author

Nathan Fletcher

## Description

This project is an opportunity to demonstrate my abilities using objects, constructors, and methods.

## Techonologies used:

- Git
- HTML
- CSS
- Bootstrap
- jQuery
- JavaScript

## Setup

1. Clone the source code from the [repo](https://github.com/nathanfletch/pizza-parlor)
2. Navigate to the directory on your computer.
3. Open the index.html file in your browser.


## Known Bugs

There are no known bugs at this time.

## Future Plans

Additional features will be implemented such as:

- Changing pizza display

## Contact

The best way to reach me is by [email](mailto:nathan.fletcher@gmail.com).

## License

The MIT License (MIT)

Copyright (c) 2021 Nathan Fletcher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Specs

Describe: Pizza.prototype.addTopping(topping)

Test: "It should add the cost of the topping to the cost of the pizza"
Before: anchovies.price:1
myPizza.costOfLarge:5
Code: myPizza.addTopping(anchovies)
After: myPizza.costOfLarge:6
Expected Output: no return value

Test: "It should add the topping argument to the toppings property of the pizza"
Before: myPizza.toppings:[]
Code: myPizza.addTopping(anchovies)
After: myPizza.toppings:[anchovies]
Expected Output: no return value


Describe: Pizza.prototype.removeTopping(topping)

Test: "It should subtract the cost of the topping from the cost of the pizza"
Before: anchovies.price:1
myPizza.costOfLarge:6
Code: myPizza.removeTopping(anchovies)
After: myPizza.costOfLarge:5
Expected Output: true

Test: "It should remove the topping from the toppings property of the pizza"
Before: myPizza.toppings:[anchovies]
Code: myPizza.removeTopping(anchovies)
After: myPizza.toppings:[]
Expected Output: true

Test: "It should return true if it successfully removed the topping"
Before: myPizza.toppings:[anchovies]
Code: myPizza.removeTopping(anchovies)
After: myPizza.toppings:[]
Expected Output: true

Test: "It should return false if this.toppings does not contain the topping"
Before: myPizza.toppings:[]
Code: myPizza.removeTopping(anchovies)
After: myPizza.toppings:[]
Expected Output: false


Describe: Pizza.prototype.setSize(size)

Test: "It should set the size property of the pizza to the argument"
Before: myPizza.size:"L"
Code: myPizza.setSize("M")
After: myPizza.size:"M"
Expected Output: no return value

Test: "It should assign the scaledCost property of the pizza based on the new size"
Before: myPizza.size:"L"
myPizza.costOfLarge:10
Code: myPizza.setSize("M")
After: myPizza.size:"M"
myPizza.scaledCost:7
Expected Output: no return value


Describe: Pizza.prototype.scaleToSize()

Test: "It should return 0.7 if the size property is equal to 'M'"
Before: myPizza.size:"M"
Code: myPizza.scaleToSize()
After: no change
Expected Output: 0.7

Test: "It should return 1 if the size property is equal to 'L'"
Before: myPizza.size:"L"
Code: myPizza.scaleToSize()
After: no change
Expected Output: 1

Test: "It should return 1.3 if the size property is equal to 'XL'"
Before: myPizza.size:"XL"
Code: myPizza.scaleToSize()
After: no change
Expected Output: 1.3


Describe: getRandomPrice()

Test: "It should return a random value between 1 and 1.5"
Code: getRandomPrice()
Expected Output: 1.32425

Describe: Store.prototype.getTodaysPrices()

Test: "It should map an array of strings into Topping elements using the constructor and getRandomPrice"
Before: ["cheese"]
Code: myStore.getTodaysPrices()
After: [Topping {name: "cheese", price: 1.319998}]
Expected Output: no return value

Describe: Store.prototype.findTopping()

Test: "It should return the topping that has the input name"
Code: myStore.findTopping("cheese")
Expected Output: Topping {name: "cheese", price: 1.319998}



## Whiteboarding

Objects: 
Store
  properties:
    orders:{}
    allToppings: []
    coupons:{}
    <!-- totalRevenue: -->
  methods:
    createTopping()
    
Order    
  properties
    pizzas:{}
    address:{}
    total:
    hasCoupon:false
    delivery:false
  methods:
    addPizza()
    removePizza()
    applyCoupon()
    removeCoupon()

Pizza 
  properties:
    cost:0
    toppings:[]
    size:"L"
  methods
    addTopping() - scale down if it's a double, triple, etc?
    removeTopping()
    setSize()
    scaleToSize()

Topping
  properties: 
    price
    name
    weight
  methods:
    double() ?

Coupon
  properties:
    type: scaling/static
    discount: 0.7/5
    conditions: 2L, etc
  methods:
    meetsConditions:false
  

ui functions
  displayStore()
    displayToppingList() - 
  displayPizza()
  displayCost
