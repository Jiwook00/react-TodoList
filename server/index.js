const express = require("express");
require("./models");

const app = express();
const port = 4000;
const cors = require("cors");
const session = require("express-session");
const morgan = require("morgan");

const controller = require('./controllers')

app.use(
    session({
        secret: "todo123",
        resave: false,
        saveUninitialized: true
    })
);

app.use(cors());
app.use(cors({
    origin: ['http://localhost:4000'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Hello")
})
app.get("/list", controller.list);
app.post("/create", controller.create);
app.post("/remove", controller.remove);

app.get("/completedList", controller.completedList);
app.post("/completed", controller.completed);


app.listen(port, () => {
    console.log(`server listening on ${port}`);
})

module.exports = app;