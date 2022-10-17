import { AbstractMessage } from "./AbstractMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";
import { IMessageReceiver } from "./IMessageReceiver.js";

export interface IMessageBus {
    registerReceiver(receiver: IMessageReceiver): void;
    send(message: AbstractMessage, sender: IBusEndpoint): void;
}