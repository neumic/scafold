import { createServer } from "http";
import { WebSocketServer } from "ws";
import { MessageBus } from "./Message/MessageBus.js";
import { BusBridgeServer } from "./Message/BusBridgeServer.js";
import { WebSocketServerWrapper } from "./WebSocket/WebSocketServerWrapper.js";

const httpServer = createServer();
const webSocketServer = new WebSocketServerWrapper(new WebSocketServer({ server: httpServer }));

httpServer.listen(3000);

const messageBus = new MessageBus();
new BusBridgeServer(webSocketServer, messageBus);
