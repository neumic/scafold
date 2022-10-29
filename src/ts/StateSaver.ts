import { AbstractMessage } from "./Message/AbstractMessage.js";
import { BoxCheckedMessage } from "./Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "./Message/BoxUncheckedMessage.js";
import { IMessageBus } from "./Message/Bus/IMessageBus.js";
import { IMessageReceiver } from "./Message/Bus/IMessageReceiver.js";
import { GetStateMessage } from "./Message/GetStateMessage.js";

export class StateSaver implements IMessageReceiver {
    private _busId: number;
    private _messageBus: IMessageBus;
    private _lastMessage: BoxCheckedMessage | BoxUncheckedMessage | null = null;

    constructor(messageBus: IMessageBus) {
        this._busId = Math.random();
        this._messageBus = messageBus;
        this._messageBus.registerReceiver(this);
    }

    receive(message: AbstractMessage): void {
        if (GetStateMessage.recognize(message) && this._lastMessage != null) {
            this._messageBus.send(this._lastMessage, this);
        } else if (BoxCheckedMessage.recognize(message)
            || BoxUncheckedMessage.recognize(message)) {
            this._lastMessage = message;
        }

    }

    getBusId(): number {
        return this._busId;
    }
}