import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export class BoxUncheckedMessage extends AbstractUIMessage {
    constructor(sender: IBusEndpoint) {
        super("BoxUncheckedMessage", sender);
    }

    public static recognize(message: AbstractUIMessage): message is BoxUncheckedMessage {
        return message.messageName() === "BoxUncheckedMessage";
    }
}