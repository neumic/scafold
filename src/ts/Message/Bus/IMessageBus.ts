import { AbstractMessage } from "../AbstractMessage.js";
import { IMessageReceiver } from "./IMessageReceiver.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export interface IMessageBus {
    registerReceiver(receiver: IMessageReceiver): void;
    send(message: AbstractMessage, sender: IBusEndpoint): void;
}