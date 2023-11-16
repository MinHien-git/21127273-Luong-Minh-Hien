const express = require("express");
const PORT = 4000 || process.env.PORT;
const expressHbs = require("express-handlebars");
const { emotions } = require("./data");
const app = express();

const task1_route = require("./routes/task1.route");
const task2_route = require("./routes/task2.route");
const task3_route = require("./routes/task3.route");
const task4_route = require("./routes/task4.route");

app.use(express.static(__dirname + "/html"));

app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
  })
);

app.set("view engine", "hbs");

app.get("/", (request, response) => {
  response.render("index");
});

app.use(task1_route);
app.use(task2_route);
app.use(task3_route);
app.use(task4_route);

app.listen(PORT, () => {
  console.log("listen to port ", PORT);
});
