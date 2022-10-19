// const Filter = require("bad-words");
// const { generateMessage, generateLocationMessage } = require("./src/utils/messages");
// const { addUser, removeUser, getUser, getUsersInRoom } = require("./src/utils/users");

// module.exports = (socket) => {
//     console.log("New WebSocket connection");
  
//     socket.on("join", (options, callback) => {
//       const { error, user } = addUser({ id: socket.id, ...options });
//       if (error) {
//         return callback(error);
//       } else {
//         socket.join(user.room);
  
//         socket.emit("message", generateMessage("Admin", "Welcome!"));
//         socket.broadcast.to(user.room).emit("message", generateMessage("Admin", `${user.username} has joined!`));
//         io.to(user.room).emit("roomData", {
//           room: user.room,
//           users: getUsersInRoom(user.room)
//         });
  
//         callback();
//       }
//     });
  
//     socket.on("sendMessage", (message, callback) => {
//       const user = getUser(socket.id);
//       const filter = new Filter();
  
//       if (filter.isProfane(message)) {
//         return callback("Profanity is not allowed!");
//       } else {
//         io.to(user.room).emit("message", generateMessage(user.username, message));
//         callback();
//       }
//     });
  
//     socket.on("sendLocation", (coords, callback) => {
//       const user = getUser(socket.id);
//       io.to(user.room).emit("locationMessage", generateLocationMessage(user.username, `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`));
//       callback();
//     });
  
//     socket.on("disconnect", () => {
//       const user = removeUser(socket.id);
  
//       if (user) {
//         io.to(user.room).emit("message", generateMessage("Admin", `${user.username} has left!`));
//         io.to(user.room).emit("roomData", {
//           room: user.room,
//           users: getUsersInRoom(user.room)
//         });
//       }
//     });
//   }