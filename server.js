const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];

app.get("/", (req, res) => {
    res.render("index", { tasks: tasks });
});

app.post("/add", (req, res) => {
    tasks.push(req.body.task);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    tasks.splice(index, 1);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});