import { IWebSocketWrapper } from "../WebSocket/IWebSocketWrapper.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeClient {
    private webSocket: IWebSocketWrapper;
    private messageBus: UIMessageBus;

    constructor(webSocket: IWebSocketWrapper, messageBus: UIMessageBus) {
        this.webSocket = webSocket;
        this.messageBus = messageBus;

        messageBus.register((message) => {
            this.webSocket.send(JSON.stringify(message));
        });

        this.webSocket.setOnMessage((messageEvent) => {
            messageBus.send(JSON.parse(messageEvent.data)); //Why does this work? any -> AbstractUIMessage
        });
    }
}