import { WebSocketConnection } from "../WebSocket/WebSocketConnection.js";
import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class SocketMessage extends AbstractUIMessage {
    constructor(serializedMessage: string, websocketConnection: WebSocketConnection) {
        const parsedMessage = JSON.parse(serializedMessage);
        if (typeof parsedMessage._name == 'string') {
            super(parsedMessage._name, websocketConnection);
        } else {
            super("unknown message", websocketConnection);
        }
    }
}