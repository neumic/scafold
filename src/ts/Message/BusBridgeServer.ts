import { IWebSocketServerWrapper } from "../WebSocket/IWebSocketServerWrapper.js";
import { IWebSocketWrapper } from "../WebSocket/IWebSocketWrapper.js";
import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeServer {
    private messageBus: UIMessageBus;

    constructor(webSocketServer: IWebSocketServerWrapper, messageBus: UIMessageBus) {
        this.messageBus = messageBus;

        const webSockets: IWebSocketWrapper[] = [];

        webSocketServer.setOnConnect((socket) => {
            webSockets.push(socket);
            messageBus.register((message) => {
                socket.send(JSON.stringify(message));
            });

            socket.setOnMessage((message) => {
                let parsedMessage = JSON.parse(message.data);
                if (parsedMessage instanceof AbstractUIMessage) {
                    messageBus.send(parsedMessage);
                }
            });
        });
    }
}