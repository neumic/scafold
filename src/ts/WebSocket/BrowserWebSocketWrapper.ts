import { IWebSocketWrapper } from "./IWebSocketWrapper.js";

export class BrowserWebSocketWrapper implements IWebSocketWrapper {
    private webSocket: WebSocket;

    constructor(webSocket: WebSocket) {
        this.webSocket = webSocket;
    }

    setOnMessage(callBack: (messageEvent: MessageEvent) => void) {
        this.webSocket.onmessage = callBack;
    }
    send(message: string) {
        this.webSocket.send(message);
    }
}