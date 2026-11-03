import framework from "./05a-framework.js";
import {readFile, writeFile, unlink, statSync, rmdir} from "node:fs";
let app = framework()

app.get("sum", (req, res) => {
    let numbers = req.url.split("/")
    res.writeHead(200)
    res.write(((+numbers[2]) + (+numbers[3])).toString());
    res.end()
})
app.get("createfile", (req, res) => {
    let file = req.url.split("/")
    writeFile(file[2], file[3].toString(), (err) => {
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
    readFile(file[2], (err, data) => {
        if (err) {
            res.writeHead(500)
            res.write("Error: " + err)
        } else {
            res.writeHead(200)
            res.write(data)
        }
        res.end();
    })})
app.get("delete", (req, res) => {
    let file = req.url.split("/")
    try {
        if (statSync(file[2]).isDirectory()) {
            rmdir(file[2], (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write(`${file[2]} deleted`)
                }
                res.end();
            })} else if (statSync(file[2]).isFile()) {
            unlink(file[2], (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write(`${file[2]} deleted`)
                }
                res.end();
            })}
    } catch (err){
        res.writeHead(404)
        res.write("file not found")
        res.end();
    }})
app.get("createUser", (req, res) => {
    readFile("db.json",(err, data) => {
        if (!err) {
            writeFile("db.json", data + req.data, (err) => {
                if (err) {
                    res.writeHead(500)
                    res.write("Error: " + err)
                } else {
                    res.writeHead(200)
                    res.write("user created successfully")
                }
                res.end()
            })
        } else {
            res.writeHead(500)
            res.write("Error: " + err)
            res.end()
        }
    })
})
app.listen(80, () => {})