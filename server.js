const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) })
const io = require('socket.io').listen(server)
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const generalController = require("./controllers/general");

app.use("/", generalController);

app.get("/chat",(req, res)=>{

  res.render("chat", {
    title : "Chat | BeMyPet"
  })

});
  app.use(express.static('.'))  
  
  io.on('connection', function (socket) {
      
    socket.on('newuser', (data) => {
      io.emit('newuser', data)
    })
      socket.on('chatmsg', (data) => {
      socket.broadcast.emit('chatmsg', data)
      })
  
  })


