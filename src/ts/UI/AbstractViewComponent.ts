import { IDocumentWrapper } from "../UI/IDocumentWrapper.js";
import { UIMessageBus } from "../Message/UIMessageBus.js";

export abstract class AbstractViewComponent {
    children: AbstractViewComponent[];
    messageBus: UIMessageBus;
    document: IDocumentWrapper;

    constructor(document: IDocumentWrapper, messageBus: UIMessageBus, ...children: AbstractViewComponent[]) {
        this.document = document;
        this.messageBus = messageBus;
        this.children = children;
    }

    abstract getElement(): Element;

}
