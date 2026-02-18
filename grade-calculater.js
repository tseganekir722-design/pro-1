let marks = prompt("Enter your marks:");

marks = Number(marks);

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 85) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B+");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C+");
} else if (marks >= 65) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: C+");
} else {
    console.log("Grade: F");
}
