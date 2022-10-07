import { IWebSocketWrapper } from "../WebSocket/IWebSocketWrapper.js";
import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IMessageReceiver } from "./IMessageReceiver.js";
import { MessageFactory } from "./MessageFactory.js";
import { SocketMessage } from "./SocketMessage.js";
import { UIMessageBus } from "./UIMessageBus.js";

export class BusBridgeClient implements IMessageReceiver {
    private webSocket: IWebSocketWrapper;
    private messageBus: UIMessageBus;
    private _busId: number;

    constructor(webSocket: IWebSocketWrapper, messageBus: UIMessageBus) {
        this.webSocket = webSocket;
        this.messageBus = messageBus;

        this._busId = Math.random();

        this.messageBus.registerReceiver(this);

        this.webSocket.setOnMessage((messageEvent) => {
            messageBus.send(new MessageFactory().makeMessage(messageEvent.data, this));
        });
    }
    receive(message: AbstractUIMessage): void {
        this.webSocket.send(JSON.stringify(message));
    }
    getBusId(): number {
        return this._busId;
    }
}