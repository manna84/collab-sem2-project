const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();

const server = app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`)})
const io = require('socket.io').listen(server)

app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(` Server listening on port ${PORT} - ${ENV} environment`);
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const generalController = require("./controllers/general");

app.use("/", generalController);

app.get("chat",(req, res)=>{


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

// app.listen(PORT, ()=>{
//     console.log("Server is running");
// })