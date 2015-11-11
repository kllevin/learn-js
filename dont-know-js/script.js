/**
 * Calculate the price of a phone
 */

const PHONE_PRICE = 50;
const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 10;
const SPENDING_THRESHOLD = 200;

var bankBalance = 250;
var total = 0;



// calculate cost of phone and accessories
var totalPurchasePrice = function() {
  preTaxCost = PHONE_PRICE + ACCESSORY_PRICE;
}

// add tax to total amount
var calculateTotalPurchaseAmount = function(amt) {
  amt = (amt * TAX_RATE) + amt;

  return amt;
}

// convert the total cost to a formatted string
var formatPrice = function() {
  console.log("Current bill is $" + finalCost.toFixed(2));
}

// verify I can afford my bill
var checkBalance = function() {
  if (finalCost < bankBalance) {
    console.log("Yes I can afford this, buy another?");
  } else {
    console.log("Stop, you can't afford this!!");
  }
}



finalCost = calculateTotalPurchaseAmount(50);
formatPrice();
