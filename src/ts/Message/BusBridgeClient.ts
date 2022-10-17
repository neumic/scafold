import { IWebSocketWrapper } from "../WebSocket/IWebSocketWrapper.js";
import { AbstractMessage } from "./AbstractMessage.js";
import { IMessageBus } from "./IMessageBus.js";
import { IMessageReceiver } from "./IMessageReceiver.js";
import { MessageConverter } from "./MessageConverter.js";

export class BusBridgeClient implements IMessageReceiver {
    public get webSocket(): IWebSocketWrapper {
        return this._webSocket;
    }

    private messageBus: IMessageBus;
    private _busId: number;
    private _webSocket: IWebSocketWrapper;

    constructor(webSocket: IWebSocketWrapper, messageBus: IMessageBus) {
        this._webSocket = webSocket;
        this.messageBus = messageBus;

        this._busId = Math.random();

        this.messageBus.registerReceiver(this);

        this.webSocket.setOnMessage((messageEvent) => {
            const concreteMessage = new MessageConverter().convert(messageEvent.data);
            if (concreteMessage !== null) {
                messageBus.send(concreteMessage, this);
            }
        });
    }
    receive(message: AbstractMessage): void {
        this.webSocket.send(JSON.stringify(message));
    }
    getBusId(): number {
        return this._busId;
    }
}