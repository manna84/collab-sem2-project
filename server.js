const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();

const server = app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) })
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


<<<<<<< HEAD
<<<<<<< HEAD

})
=======
  res.render("chat", {
      title : "Chat | BeMyPet"
  })

});
>>>>>>> 46f16b6ab569fa33781d0e294d054693a001f44c
  
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

=======
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



>>>>>>> f5817a2fc931afd015a2d553a15a0044f0e65404
// app.listen(PORT, ()=>{
//     console.log("Server is running");
// })