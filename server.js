const express = require("express");
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const app = express();
const io = require('socket.io').listen(server)
const server = app.listen(port, () => {console.log(`Server running at http://localhost:${port}`)})

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

const generalController = require("./controllers/general");

app.use("/", generalController);



app.listen(PORT, ()=>{
    console.log("Server is running");
})

////Chat Feature (Socket.io)
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'views/chat.handlebars')
  })
  
  app.use(express.static('.'))
  
  
  
  
  io.on('connection', function (socket) {
      
    // Listen for a "newuser" message
    socket.on('newuser', (data) => {
      // Transmit a message to everyone except the sender
      //socket.broadcast.emit('newuser', data)
  
      // The same message, sent to all users - try it!
      io.emit('newuser', data)
      })
       
      
      // Listen for "chatmsg"
      //   io.emit to all user
      socket.on('chatmsg', (data) => {
      socket.broadcast.emit('chatmsg', data)
      })
  
  
  })
