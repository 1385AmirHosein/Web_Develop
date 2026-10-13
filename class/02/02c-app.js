import {controllers} from "./02c-controllers.js";

let command = process.argv[2];
let success = false;
for(let i = 0; i < controllers.length; i++)
    if (controllers[i].name === command){
        console.log(controllers[i].func(process.argv.slice(3)))
        success = true;
        break;
    }
if (!success) console.log("command not found!")