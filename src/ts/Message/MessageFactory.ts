import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { BoxCheckedMessage } from "./BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "./BoxUncheckedMessage.js";
import { ErrorMessage } from "./ErrorMessage.js";

export class MessageFactory {
    public makeMessage(serializedMessage: string): AbstractUIMessage {
        const parsedMessage = JSON.parse(serializedMessage);
        if (parsedMessage._name === "BoxCheckedMessage") {
            return new BoxCheckedMessage();
        }
        if (parsedMessage._name === "BoxUncheckedMessage") {
            return new BoxUncheckedMessage();
        }
        return new ErrorMessage(new Error());
    }
}