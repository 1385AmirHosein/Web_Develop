import {createServer} from "http"

function serverCallback(req, res) {
    let numbers = req.url.split("/")
    res.writeHead(200)
    res.write(String((+numbers[1]) + (+numbers[2])));
    res.end();
}
let server = createServer(serverCallback);
server.listen(80);