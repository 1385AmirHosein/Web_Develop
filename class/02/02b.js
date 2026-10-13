let command = process.argv[2];
let controllers = [
    {
        name: "sum",
        func: (values) => Number(values[0]) + Number(values[1])
    },
    {
        name: "minus",
        func: (values) => Number(values[0]) - Number(values[1])
    },
    {
        name: "print",
        func: (values) => {
           return (
`{
    name: ${values[0]},
    email: ${values[1]},
    age: ${values[2]}
}`)
        }
    }
]
let success = false;
for(let i = 0; i < controllers.length; i++)
    if (controllers[i].name === command){
        console.log(controllers[i].func(process.argv.slice(3)))
        success = true;
        break;
    }
if (!success) console.log("command not found!")