let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
switch (process.argv[2]) {
    case "sum":
        console.log("sum is:", num1 + num2);
        break;
    case "minus":
        console.log("minus is:", num1 - num2);
        break;
    default:
        console.log("command Not Found");
}