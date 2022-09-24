import { IDocumentWrapper } from "./IDocumentWrapper.js";
import { RootViewComponent } from "./RootViewComponent.js";
import { UIMessageBus } from "../Message/UIMessageBus.js";
import { AbstractViewComponent } from "./AbstractViewComponent.js";

export class UIBuilder {
    static build(document: IDocumentWrapper): AbstractViewComponent {
        const messageBus: UIMessageBus = new UIMessageBus();

        const rootViewComponent = new RootViewComponent(document, messageBus,
        );

        const websocket = new WebSocket("ws://localhost:3000");
        websocket.onmessage = (data) => {
            console.log(data);
            websocket.send(data + " HUH?");
        };

        document.getBodyElement().appendChild(rootViewComponent.getElement());

        return rootViewComponent;
    };
}