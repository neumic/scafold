import { IDocumentWrapper } from "./IDocumentWrapper.js";
import { RootViewComponent } from "./RootViewComponent.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";
import { CheckboxComponent } from "./CheckboxComponent.js";
import { BusBridgeClient } from "../Message/Bus/BusBridgeClient.js";
import { BrowserWebSocketWrapper } from "../WebSocket/BrowserWebSocketWrapper.js";
import { IMessageBus } from "../Message/Bus/IMessageBus.js";

export class UIBuilder {
    static build(document: IDocumentWrapper, messageBus: IMessageBus): AbstractViewComponent {
        const rootViewComponent = new RootViewComponent(document, messageBus,
            new CheckboxComponent(document, messageBus)
        );

        new BusBridgeClient(new BrowserWebSocketWrapper(new WebSocket("ws://localhost:3000")), messageBus);

        document.getBodyElement().appendChild(rootViewComponent.getElement());

        return rootViewComponent;
    };
}