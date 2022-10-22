import { IWebSocketWrapper } from "./IWebSocketWrapper.js";

export class BrowserWebSocketWrapper implements IWebSocketWrapper {
    private _webSocket: WebSocket;
    public get webSocket(): WebSocket {
        return this._webSocket;
    }

    constructor(webSocket: WebSocket) {
        this._webSocket = webSocket;
    }

    setOnMessage(callBack: (messageEvent: MessageEvent) => void) {
        this.webSocket.onmessage = callBack;
    }

    setOnOpen(callBack: (event: Event) => void) {
        this.webSocket.onopen = callBack;
    }

    send(message: string) {
        this.webSocket.send(message);
    }
}