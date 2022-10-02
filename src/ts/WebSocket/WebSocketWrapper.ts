import { IWebSocketWrapper } from "./IWebSocketWrapper.js";
import { WebSocket as WSWebSocket } from "ws";

export class WebSocketWrapper implements IWebSocketWrapper {
    private webSocket: WebSocket | WSWebSocket;

    constructor(webSocket: WebSocket | WSWebSocket) {
        this.webSocket = webSocket;
    }

    setOnMessage(callBack: (data: any) => void) {
        this.webSocket.onmessage = callBack;
    }
    send(message: string) {
        this.webSocket.send(message);
    }
}