import express from "express"
import formidable from "formidable"
import {dirname} from "path"
import { fileURLToPath } from 'url';
import {add_model} from './add_custom_model.js'


const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});

app.use(express.static(__dirname, { // host the whole directory
    extensions: ["html", "htm", "gif", "png"],
}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.all("/addForm.html", (req, res) => {
    if (req.method === "POST") {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            add_model(res, err, fields, files)
            res.sendFile(__dirname + "/index.html")
        })
    } else {
        res.sendFile(__dirname + "/addForm.html")
    }
})

app.get("*", (req, res) => {
    return res.sendStatus(404)
})