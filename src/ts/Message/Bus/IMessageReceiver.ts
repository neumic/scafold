import { AbstractMessage } from "../AbstractMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export interface IMessageReceiver extends IBusEndpoint {
    receive(message: AbstractMessage): void;
}
