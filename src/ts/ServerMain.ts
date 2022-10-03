import { createServer } from "http";
import { WebSocketServer } from "ws";
import { UIMessageBus } from "./Message/UIMessageBus.js";
import { BusBridgeServer } from "./Message/BusBridgeServer.js";
import { WebSocketServerWrapper } from "./WebSocket/WebSocketServerWrapper.js";

const webSocketServer = new WebSocketServerWrapper(new WebSocketServer({ server: createServer() }));

// webSocketServer.on('connection', (webSocket) => {
//     webSocket.send("HEY BUDDY!");
//     webSocket.on("message", (data) => {
//         console.log(data);
//         webSocket.send(data + " WAHT?");
//     });
// });

// httpServer.listen(3000);

const messageBus = new UIMessageBus();
new BusBridgeServer(webSocketServer, messageBus);
