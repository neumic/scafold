import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export class BoxCheckedMessage extends AbstractUIMessage {
    constructor() {
        super("BoxCheckedMessage");
    }

    public static recognize(message: AbstractUIMessage): message is BoxCheckedMessage {
        return message.messageName() === "BoxCheckedMessage";
    }
}