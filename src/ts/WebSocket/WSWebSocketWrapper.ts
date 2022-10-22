import { GenericEvent, IWebSocketWrapper } from "./IWebSocketWrapper.js";
import { MessageEvent, WebSocket } from "ws";

export class WSWebSocketWrapper implements IWebSocketWrapper {
    private webSocket: WebSocket;

    constructor(webSocket: WebSocket) {
        this.webSocket = webSocket;
    }
    setOnOpen(callBack: (event: GenericEvent) => void): void {
        this.webSocket.onopen = callBack;
    }

    setOnMessage(callBack: (messageEvent: MessageEvent) => void) {
        this.webSocket.onmessage = callBack;
    }
    send(message: string) {
        this.webSocket.send(message);
    }
}