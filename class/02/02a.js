let command = process.argv[2];
let input = process.argv.slice(3);

console.log("------------------------");
console.log("command is:", command);
console.log("inputs are:", input);

function sum(a, b){
    console.log("sum is:", Number(a) + Number(b))
}
function minus(a, b){
    console.log("result is:", Number(a) - Number(b))
}

function print(values){
    let person =
`{
    name: ${values[0]},
    email: ${values[1]},
    age: ${values[2]}
}`
    console.log(person)
}

if(command === "sum"){
    sum(input[0], input[1]);
}
else if(command === "minus"){
    minus(input[0], input[1]);
}
else if (command === "print") {
    print(input)
}
else {
    console.log("command not found.")
}
