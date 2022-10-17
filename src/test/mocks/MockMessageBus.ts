import { AbstractUIMessage } from "../../ts/Message/AbstractUIMessage.js";
import { IBusEndpoint } from "../../ts/Message/IBusEndpoint.js";
import { IMessageBus } from "../../ts/Message/IMessageBus.js";
import { IMessageReceiver } from "../../ts/Message/IMessageReceiver.js";

type SendParameters = { message: AbstractUIMessage, sender: IBusEndpoint; };

export class MockMessageBus implements IMessageBus {
    receivers: IMessageReceiver[] = [];
    messageSent: SendParameters[] = [];

    registerReceiver(receiver: IMessageReceiver): void {
        this.receivers.push(receiver);
    }
    send(message: AbstractUIMessage, sender: IBusEndpoint): void {
        this.messageSent.push({ message, sender });
    }
}