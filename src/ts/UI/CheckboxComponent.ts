import { AbstractMessage } from "../Message/AbstractMessage.js";
import { BoxCheckedMessage } from "../Message/BoxCheckedMessage.js";
import { BoxUncheckedMessage } from "../Message/BoxUncheckedMessage.js";
import { IMessageBus } from "../Message/IMessageBus.js";
import { IMessageReceiver } from "../Message/IMessageReceiver.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";
import { DocumentWrapper } from "./DocumentWrapper.js";

export class CheckboxComponent extends AbstractViewComponent implements IMessageReceiver {
    element: HTMLInputElement;
    private _busId: number;

    constructor(document: DocumentWrapper, messageBus: IMessageBus) {
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

    receive(message: AbstractMessage): void {
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