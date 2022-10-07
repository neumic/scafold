import { AbstractUIMessage } from "./AbstractUIMessage.js";
import { BoxCheckedMessage } from "./BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "./BoxUncheckedMessage.js";
import { ErrorMessage } from "./ErrorMessage.js";
import { IBusEndpoint } from "./IBusEndpoint.js";

export class MessageFactory {
    public makeMessage(serializedMessage: string, sendAs: IBusEndpoint): AbstractUIMessage {
        const parsedMessage = JSON.parse(serializedMessage);
        if (parsedMessage._name === "BoxCheckedMessage") {
            return new BoxCheckedMessage(sendAs);
        }
        if (parsedMessage._name === "BoxUncheckedMessage") {
            return new BoxUncheckedMessage(sendAs);
        }
        return new ErrorMessage(new Error(), sendAs);
    }
}