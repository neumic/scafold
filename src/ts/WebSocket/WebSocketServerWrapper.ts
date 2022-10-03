import { WebSocketServer } from "ws";
import { IWebSocketServerWrapper } from "./IWebSocketServerWrapper.js";
import { IWebSocketWrapper } from "./IWebSocketWrapper.js";
import { WSWebSocketWrapper } from "./WSWebSocketWrapper.js";

export class WebSocketServerWrapper implements IWebSocketServerWrapper {
    webSocketServer: WebSocketServer;

    constructor(webSocketServer: WebSocketServer) {
        this.webSocketServer = webSocketServer;
    }

    public setOnConnect(callback: (socketWrapper: IWebSocketWrapper) => void) {
        this.webSocketServer.on("connection", (socket, request) => {
            callback(new WSWebSocketWrapper(socket));
        });
    }
}