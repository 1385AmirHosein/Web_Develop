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
export {controllers}