import { IWebSocketWrapper } from "../WebSocket/IWebSocketWrapper.js";
import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class WebSocketBusBridgeClient {
    private webSocket: IWebSocketWrapper;
    private messageBus: UIMessageBus;

    constructor(webSocket: IWebSocketWrapper, messageBus: UIMessageBus) {
        this.webSocket = webSocket;
        this.messageBus = messageBus;

        messageBus.register((message) => {
            this.webSocket.send(JSON.stringify(message));
        });

        this.webSocket.setOnMessage((data) => {
            messageBus.send(data.data as AbstractUIMessage);
        });
    }
}