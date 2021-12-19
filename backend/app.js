const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { getUsersInRoom, addUser, getUser } = require("./socket/index");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

io.on("connection", (socket) => {
  socket.on("join", (payload) => {
    let numberOfUsersInRoom = getUsersInRoom(payload.room).length;

    const { error, newUser } = addUser({
      id: socket.id,
      name: numberOfUsersInRoom === 0 ? "Player 1" : "Player 2",
      room: payload.room
    });
    console.log("newUser", newUser);
    console.log("users", getUsersInRoom(newUser.room));

    socket.join(newUser.room);

    io.to(newUser.room).emit("roomData", {
      room: newUser.room,
      users: getUsersInRoom(newUser.room)
    });

    socket.emit("currentUserData", { name: newUser.name });

    socket.on("initGameState", (gameState) => {
      const user = getUser(socket.id);
      console.log(user);
      if (user) io.to(user.room).emit("initGameState", gameState);
    });
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
