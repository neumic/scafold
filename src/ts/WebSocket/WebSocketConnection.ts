import { AbstractMessage } from "../Message/AbstractMessage.js";
import { BusId } from "../Message/Bus/IBusEndpoint.js";
import { IMessageReceiver } from "../Message/Bus/IMessageReceiver.js";
import { IWebSocketWrapper } from "./IWebSocketWrapper.js";

export class WebSocketConnection implements IMessageReceiver {
    websocket: IWebSocketWrapper;
    messageSenderId: BusId;

    constructor(websocket: IWebSocketWrapper) {
        this.websocket = websocket;
        this.messageSenderId = Math.random();
    }

    receive(message: AbstractMessage): void {
        this.websocket.send(JSON.stringify(message));
    }

    getBusId(): number {
        return this.messageSenderId;
    }
}