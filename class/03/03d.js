import {createServer} from "http"
let controllers = [{
    name: "sum",
    func: (req, res) => {
        let numbers = req.url.split("/")
        res.writeHead(200)
        res.write(((+numbers[2]) + (+numbers[3])).toString());
        res.end();
    }
}]
function serverCallback(req, res) {
    let success = false;
    for(let i = 0; i < controllers.length; i++)
        if (req.url.startsWith('/'+"sum")) {
            controllers[i].func(req, res);
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