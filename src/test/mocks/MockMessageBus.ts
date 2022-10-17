import { AbstractMessage } from "../../ts/Message/AbstractMessage.js";
import { IBusEndpoint } from "../../ts/Message/IBusEndpoint.js";
import { IMessageBus } from "../../ts/Message/IMessageBus.js";
import { IMessageReceiver } from "../../ts/Message/IMessageReceiver.js";

type SendParameters = { message: AbstractMessage, sender: IBusEndpoint; };

export class MockMessageBus implements IMessageBus {
    receivers: IMessageReceiver[] = [];
    messageSent: SendParameters[] = [];

    registerReceiver(receiver: IMessageReceiver): void {
        this.receivers.push(receiver);
    }
    send(message: AbstractMessage, sender: IBusEndpoint): void {
        this.messageSent.push({ message, sender });
    }
}