const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) })
const io = require('socket.io').listen(server)
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const generalController = require("./controllers/general");


io.on('connection', function (socket) {
  console.log("io test");
socket.on('newuser', (data) => {
  io.emit('newuser', data)
})
  socket.on('chatmsg', (data) => {
  socket.broadcast.emit('chatmsg', data)
  })

})

app.use("/", generalController);

  app.use(express.static('.'))  
  




// app.listen(PORT, () => {
//     console.log("Server is running");
// })
