var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static("public"));
app.use("/scripts/",express.static(__dirname + "/node_modules"));

io.on('connection', (socket)=>{
  console.log("User Connected!");

  socket.on("disconnect",()=>{
    console.log("user disconnected");
  });
})

const port = 80
http.listen(port, ()=> {
  console.log(`Listening on port ${port}`);
})
