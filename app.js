const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port= 3000;


mongoose.connect("mongodb+srv://jebazkevin:llion243613@cluster0.vdrw2ip.mongodb.net/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");




app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(port, () => console.log("Server started listening on port: "+ port));
