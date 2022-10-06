import { IWebSocketServerWrapper } from "../WebSocket/IWebSocketServerWrapper.js";
import { WebSocketConnection } from "../WebSocket/WebSocketConnection.js";
import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { SocketMessage } from "./SocketMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeServer {
    private messageBus: UIMessageBus;

    constructor(webSocketServer: IWebSocketServerWrapper, messageBus: UIMessageBus) {
        this.messageBus = messageBus;

        const webSockets: WebSocketConnection[] = [];

        webSocketServer.setOnConnect((socket) => {
            const socketConnection = new WebSocketConnection(socket);
            webSockets.push(socketConnection);

            messageBus.registerReceiver(socketConnection);

            socket.setOnMessage((message) => {
                messageBus.send(new SocketMessage(message.data, socketConnection));
            });
        });
    }
}