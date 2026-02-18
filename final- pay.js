// customer details
let age = 22;
let region = "East";
let subtotal = 150;

// discount and tax rates
let discount = 0;
let taxRate = 0.08;

// check regional discount eligibility
if (region === "East") {
    discount = 15;
    console.log("Customer is eligible for regional discount.");
} else {
    console.log("Customer is NOT eligible for regional discount.");
}

// apply discount
let discountedAmount = subtotal - discount;

// calculate tax
let tax = discountedAmount * taxRate;

// final amount
let finalAmount = discountedAmount + tax;

// display results
console.log("Subtotal: $" + subtotal);
console.log("Discount: $" + discount);
console.log("Tax: $" + tax.toFixed(2));
console.log("Final Amount to Pay: $" + finalAmount.toFixed(2));
