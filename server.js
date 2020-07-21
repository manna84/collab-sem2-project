const express = require("express");
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is running");
})