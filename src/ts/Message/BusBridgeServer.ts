import { IWebSocketServerWrapper } from "../WebSocket/IWebSocketServerWrapper.js";
import { WebSocketConnection } from "../WebSocket/WebSocketConnection.js";
import { SocketMessage } from "./SocketMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeServer {

    constructor(webSocketServer: IWebSocketServerWrapper, messageBus: UIMessageBus) {
        webSocketServer.setOnConnect((socket) => {
            const socketConnection = new WebSocketConnection(socket);

            messageBus.registerReceiver(socketConnection);

            socket.setOnMessage((message) => {
                messageBus.send(new SocketMessage(message.data, socketConnection));
            });
        });
    }
}