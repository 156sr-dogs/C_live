const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// 静态文件服务
app.use(express.static('public'));

// WebSocket连接
io.on('connection', (socket) => {
    console.log('用户已连接');
    
    socket.on('danmaku', (text) => {
        io.emit('danmaku', text); // 广播弹幕
    });

    socket.on('disconnect', () => {
        console.log('用户已断开');
    });
});

server.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});
