import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class WebSocketClient {
    private webSocket: WebSocket;
    private messageBus: UIMessageBus;

    constructor(webSocket: WebSocket, messageBus: UIMessageBus) {
        this.webSocket = webSocket;
        this.messageBus = messageBus;

        messageBus.register((message) => {
            this.webSocket.send(JSON.stringify(message));
        });

        this.webSocket.onmessage = (data) => {
            messageBus.send(data.data as AbstractUIMessage);
        };
    }
}