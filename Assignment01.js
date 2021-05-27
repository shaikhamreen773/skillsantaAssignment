let num1 = prompt("Enter number 1:");
let num2 = prompt("Enter number 2:");
let num3 = prompt("Enter number 3:");
if (num1 > num2 && num1 > num3) {
    document.write(num1 + " is largest number");
}
else if (num2 > num1 && num2 > num3) {
    document.write(num2 + " is largest number");
}
else if (num3 > num1 && num3 > num2) {
    document.write(num3 + " is largest number");
}
else if (num1 == num2 && num2 == num3 && num3 == num1) {
    document.write("All three are equal")
}
else if (num1 == num2 && num3 > num1) {
    document.write(num3 + " is largest number");

}
else if (num3 == num2 && num1 > num3) {
    document.write(num1 + " is largest number");

}
else if (num3 == num1 && num2 > num3) {
    document.write(num2 + " is largest number");

}
else {

}
