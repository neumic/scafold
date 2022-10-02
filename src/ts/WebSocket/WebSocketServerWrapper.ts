import { WebSocketServer } from "ws";
import { IWebSocketServerWrapper } from "./IWebSocketServerWrapper.js";
import { IWebSocketWrapper } from "./IWebSocketWrapper.js";
import { WebSocketWrapper } from "./WebSocketWrapper.js";

export class WebSocketServerWrapper implements IWebSocketServerWrapper {
    webSocketServer: WebSocketServer;

    constructor(webSocketServer: WebSocketServer) {
        this.webSocketServer = webSocketServer;
    }

    public setOnConnect(callback: (socket: IWebSocketWrapper,
        message: string) => void) {
        this.webSocketServer.on("connection", (socket, request) => {
            callback(new WebSocketWrapper(socket), "pull the string off the request");
        });
    }
}