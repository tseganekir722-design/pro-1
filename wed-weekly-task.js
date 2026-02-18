//function of loop from 5 to 15
function loopNumbers() {
    for (let i = 5; i <= 15; i++) {
        console.log(i);
    }
}

loopNumbers();

// function to check odd or even
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is EVEN");
        return "even";
    } else {
        console.log(num + " is ODD");
        return "odd";
    }
}

// function to check divisible by 3, 5  or both
function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Divisible by BOTH 3 and 5");
    } else if (num % 3 === 0) {
        console.log("Divisible by 3");
    } else if (num % 5 === 0) {
        console.log("Divisible by 5");
    } else {
        console.log("Not divisible by 3 or 5");
    }
}

// function to process numbers
function processNumbers() {
    let totalSum = 0;
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 5; i <= 15; i++) {
        console.log("Number:", i);

        totalSum += i;

        let type = checkOddEven(i);
        if (type === "even") {
            evenCount++;
        } else {
            oddCount++;
        }

        checkDivisibility(i);
        console.log("----------------");
    }

    // print final results
    console.log("TOTAL SUM =", totalSum);
    console.log("ODD COUNT =", oddCount);
    console.log("EVEN COUNT =", evenCount);
}

// run the program
processNumbers();

