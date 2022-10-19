const http = require("http");
const socketio = require("socket.io");

module.exports = (app) => {
    const server = http.createServer(app);
    const io = socketio(server);

    return io;
}