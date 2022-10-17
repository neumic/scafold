import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";
import { IMessageReceiver } from "./IMessageReceiver.js";

export interface IMessageBus {
    registerReceiver(receiver: IMessageReceiver): void;
    send(message: AbstractUIMessage, sender: IBusEndpoint): void;
}