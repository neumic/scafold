import { IDocumentWrapper } from "../../ts/UI/IDocumentWrapper.js";

export class MockDocumentWrapper implements IDocumentWrapper {
    private body: Element;

    constructor() {
        this.body = document.createElement("div");
    }
    createElement<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName): HTMLElementTagNameMap[TagName] {
        return document.createElement(tagName);
    }

    getBodyElement(): Element {
        return this.body;
    }

}