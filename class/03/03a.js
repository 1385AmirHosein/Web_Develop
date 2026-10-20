import {createServer} from "http"

function serverCallback() {
    console.log("server called");
}
let server = createServer(serverCallback);
server.listen(81);