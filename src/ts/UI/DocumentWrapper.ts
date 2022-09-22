import { IDocumentWrapper } from "./IDocumentWrapper.js";

export class DocumentWrapper implements IDocumentWrapper {
    createElement<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName): HTMLElementTagNameMap[TagName] {
        return document.createElement(tagName);
    }
    getBodyElement(): Element {
        return document.body;
    }
}