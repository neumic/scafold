import { IMessageBus } from "../Message/Bus/IMessageBus.js";
import { IDocumentWrapper } from "../UI/IDocumentWrapper.js";

export abstract class AbstractViewComponent {
    children: AbstractViewComponent[];
    messageBus: IMessageBus;
    document: IDocumentWrapper;

    constructor(document: IDocumentWrapper, messageBus: IMessageBus, ...children: AbstractViewComponent[]) {
        this.document = document;
        this.messageBus = messageBus;
        this.children = children;
    }

    abstract getElement(): Element;

}
