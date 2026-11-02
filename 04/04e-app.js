import framework from "./04d-framework.js";
import {readFile, writeFile, unlink} from "node:fs";
let app = framework()

app.get("sum", (req, res) => {
    let numbers = req.url.split("/")
    res.writeHead(200)
    res.write(((+numbers[2]) + (+numbers[3])).toString());
    res.end()
})
app.get("createfile", (req, res) => {
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
    })})
app.get("readfile", (req, res) => {
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
    })})
app.get("deletefile", (req, res) => {
    let file = req.url.split("/")
    unlink(`${file[2]}.txt`, (err) => {
        if (err) {
            res.writeHead(500)
            res.write("Error: " + err)
        } else {
            res.writeHead(200)
            res.write(`${file[2]}.txt deleted`)
        }
        res.end();
    })})
app.listen(80, () => {})