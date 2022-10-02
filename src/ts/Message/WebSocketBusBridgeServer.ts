import { IWebSocketServerWrapper } from "../WebSocket/IWebSocketServerWrapper.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class WebSocketBusBridgeServer {
    private messageBus: UIMessageBus;

    constructor(webSocketServer: IWebSocketServerWrapper, messageBus: UIMessageBus) {
        this.messageBus = messageBus;

        webSocketServer.setOnConnect((socket, request) => {

        });
    }
}