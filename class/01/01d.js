function domath(operator, numbers) {
    let result = NaN;
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    switch (operator) {
        case "sum":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
    }
    return result;
}
console.log("result is:", domath(process.argv[2], process.argv.slice(3)));