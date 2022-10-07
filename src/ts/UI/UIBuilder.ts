import { IDocumentWrapper } from "./IDocumentWrapper.js";
import { RootViewComponent } from "./RootViewComponent.js";
import { UIMessageBus } from "../Message/UIMessageBus.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";
import { CheckboxComponent } from "./CheckboxComponent.js";
import { BusBridgeClient } from "../Message/BusBridgeClient.js";
import { BrowserWebSocketWrapper } from "../WebSocket/BrowserWebSocketWrapper.js";

export class UIBuilder {
    static build(document: IDocumentWrapper): AbstractViewComponent {
        const messageBus: UIMessageBus = new UIMessageBus();

        const rootViewComponent = new RootViewComponent(document, messageBus,
            new CheckboxComponent(document, messageBus)
        );

        new BusBridgeClient(new BrowserWebSocketWrapper(new WebSocket("ws://localhost:3000")), messageBus);

        document.getBodyElement().appendChild(rootViewComponent.getElement());

        return rootViewComponent;
    };
}