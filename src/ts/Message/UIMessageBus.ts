import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";
import { IMessageBus } from "./IMessageBus.js";
import { IMessageReceiver } from "./IMessageReceiver.js";

export class UIMessageBus implements IMessageBus {
    private receivers: IMessageReceiver[] = [];

    registerReceiver(receiver: IMessageReceiver): void {
        this.receivers.push(receiver);
    }

    send(message: AbstractUIMessage, sender: IBusEndpoint): void {
        console.debug("Message Sent: ", message);
        this.receivers.forEach((receiver) => {
            if (receiver.getBusId() !== sender.getBusId()) {
                receiver.receive(message);
            }
        });
    }
}