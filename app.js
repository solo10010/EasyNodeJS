const http = require('http');

// Сервер будет прослушивать все доступные IP-адреса и порты, назначенные Plesk.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(); // Убираем указание порта, чтобы использовать стандартный.