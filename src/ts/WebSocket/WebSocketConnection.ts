import { AbstractUIMessage } from "../Message/AbstractUIMessage.js";
import { BusId } from "../Message/IBusEndpoint.js";
import { IMessageReceiver } from "../Message/IMessageReceiver.js";
import { IWebSocketWrapper } from "./IWebSocketWrapper.js";

export class WebSocketConnection implements IMessageReceiver {
    websocket: IWebSocketWrapper;
    messageSenderId: BusId;

    constructor(websocket: IWebSocketWrapper) {
        this.websocket = websocket;
        this.messageSenderId = Math.random();
    }

    receive(message: AbstractUIMessage): void {
        this.websocket.send(JSON.stringify(message));
    }

    getBusId(): number {
        return this.messageSenderId;
    }
}