import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';



const APP_PORT = 8020;
const app = express();
app.use(cors);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('connected');

    socket.on('disconnect', () => console.log('Disconnected'));
})

server.listen(APP_PORT, () => {
    console.log(`++=== Listening to server on port ${APP_PORT} ===++`)
})