import { UIMessageBus } from "../Message/UIMessageBus.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";
import { IDocumentWrapper } from "./IDocumentWrapper.js";

export class RootViewComponent extends AbstractViewComponent {
    private section: HTMLElement;

    constructor(document: IDocumentWrapper, messageBus: UIMessageBus, ...children: AbstractViewComponent[]) {
        super(document, messageBus, ...children);
        this.section = this.document.createElement("section");
        this.section.id = "root";
        this.children.forEach(child => this.section.appendChild(child.getElement()));
    }

    getElement(): Element {
        return this.section;
    }
}