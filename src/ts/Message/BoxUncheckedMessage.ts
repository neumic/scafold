import { AbstractUIMessage } from "./AbstractUIMessage.js";

export class BoxUncheckedMessage extends AbstractUIMessage {
    constructor() {
        super("BoxUncheckedMessage");
    }

    public static recognize(message: AbstractUIMessage): message is BoxUncheckedMessage {
        return message.messageName() === "BoxUncheckedMessage";
    }
}