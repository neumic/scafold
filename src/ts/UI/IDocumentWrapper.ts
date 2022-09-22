export interface IDocumentWrapper {
    getBodyElement(): Element;
    createElement<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName): HTMLElementTagNameMap[TagName];
};