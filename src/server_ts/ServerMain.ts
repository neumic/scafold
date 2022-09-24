import { createServer } from "http";
import { WebSocketServer } from "ws";

const httpServer = createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('here');
    response.end();
});

const webSocketServer = new WebSocketServer({ server: httpServer });

webSocketServer.on('connection', (webSocket) => {
    webSocket.send("HEY BUDDY!");
    webSocket.on("message", (data) => {
        console.log(data);
        webSocket.send(data + " WAHT?");
    });
});

httpServer.listen(3000);