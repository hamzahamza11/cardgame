const express = require('express');
const app = express();

const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:3000",
    },
  });





io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on("r1", (data)=>{
      console.log(data)
  })
});


