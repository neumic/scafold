import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export interface IMessageReceiver extends IBusEndpoint {
    receive(message: AbstractUIMessage): void;
}
