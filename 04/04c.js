import {createServer} from "http"
import {writeFile, readFile} from "node:fs"
let controllers = [{
    name: "sum",
    func: (req, res) => {
        let numbers = req.url.split("/")
        res.writeHead(200)
        res.write(((+numbers[2]) + (+numbers[3])).toString());
        res.end();
    }
},{
    name: "createfile",
    func: (req, res) => {
        let file = req.url.split("/")
        writeFile(`${file[2]}.txt`, file[3].toString(), (err) => {
            if (err) {
                res.writeHead(500)
                res.write("Error: " + err)
            } else {
                res.writeHead(200)
                res.write("success")
            }
            res.end();
        });
    }
},{
    name: "readfile",
    func: (req, res) => {
        let file = req.url.split("/")
        readFile(`${file[2]}.txt`, (err, data) => {
            if (err) {
                res.writeHead(500)
                res.write("Error: " + err)
            } else {
                res.writeHead(200)
                res.write(data)
            }
            res.end();
        })
    }
}]
function serverCallback(req, res) {
    let success = false;
    for(const controller of controllers)
        if (req.url.startsWith('/'+controller.name)) {
            controller.func(req, res);
            success = true;
            break;
        }
    if (!success) {
        res.writeHead(403);
        res.write("No such controller found.");
        res.end();
    }
}
let server = createServer(serverCallback);
server.listen(80);