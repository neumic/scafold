import { AbstractUIMessage } from "../Message/AbstractUIMessage.js";
import { BoxCheckedMessage } from "../Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../Message/BoxUncheckedMessage.js";
import { IMessageReceiver } from "../Message/IMessageReceiver.js";
import { UIMessageBus } from "../Message/UIMessageBus.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";
import { DocumentWrapper } from "./DocumentWrapper.js";

export class CheckboxComponent extends AbstractViewComponent implements IMessageReceiver {
    element: HTMLInputElement;
    private _busId: number;

    constructor(document: DocumentWrapper, messageBus: UIMessageBus) {
        super(document, messageBus);

        this._busId = Math.random();

        messageBus.registerReceiver(this);

        this.element = document.createElement("input");
        this.element.type = "checkbox";
        this.element.onclick = () => messageBus.send(
            this.element.checked ? new BoxCheckedMessage() : new BoxUncheckedMessage(),
            this
        );
    }

    receive(message: AbstractUIMessage): void {
        if (BoxCheckedMessage.recognize(message)) {
            this.element.checked = true;
        } else if (BoxUncheckedMessage.recognize(message)) {
            this.element.checked = false;
        }
    }

    getBusId(): number {
        return this._busId;
    }

    getElement(): Element {
        return this.element;
    }
}