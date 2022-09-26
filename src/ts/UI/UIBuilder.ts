import { IDocumentWrapper } from "./IDocumentWrapper.js";
import { RootViewComponent } from "./RootViewComponent.js";
import { UIMessageBus } from "../Message/UIMessageBus.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";

export class UIBuilder {
    static build(document: IDocumentWrapper): AbstractViewComponent {
        const messageBus: UIMessageBus = new UIMessageBus();

        const rootViewComponent = new RootViewComponent(document, messageBus,
        );

        document.getBodyElement().appendChild(rootViewComponent.getElement());

        return rootViewComponent;
    };
}