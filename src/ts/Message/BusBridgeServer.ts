import { IWebSocketServerWrapper } from "../WebSocket/IWebSocketServerWrapper.js";
import { WebSocketConnection } from "../WebSocket/WebSocketConnection.js";
import { MessageConverter } from "./MessageConverter.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeServer {

    constructor(webSocketServer: IWebSocketServerWrapper, messageBus: UIMessageBus) {
        webSocketServer.setOnConnect((socket) => {
            const socketConnection = new WebSocketConnection(socket);

            messageBus.registerReceiver(socketConnection);

            socket.setOnMessage((socketMessage) => {
                const message = new MessageConverter().convert(socketMessage.data);
                if (message !== null) {
                    messageBus.send(message, socketConnection);
                }
            });
        });
    }
}