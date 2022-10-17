import { BusBridgeClient } from "../../ts/Message/BusBridgeClient.js";
import { CheckboxComponent } from "../../ts/UI/CheckboxComponent.js";
import { RootViewComponent } from "../../ts/UI/RootViewComponent.js";
import { UIBuilder } from "../../ts/UI/UIBuilder.js";
import { BrowserWebSocketWrapper } from "../../ts/WebSocket/BrowserWebSocketWrapper.js";
import { assertEquals, assertInstanceOf, fail } from "../Asserts.js";
import { MockDocumentWrapper } from "../mocks/MockDocumentWrapper.js";
import { MockMessageBus } from "../mocks/MockMessageBus.js";
import { TestCase } from "../TestCase.js";

export class UIBuilderTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function viewComponentStructure() {
                const mockument = new MockDocumentWrapper();
                const mockMessageBus = new MockMessageBus;

                const rootcomponent = UIBuilder.build(mockument, mockMessageBus);

                assertInstanceOf(RootViewComponent, rootcomponent);
                assertEquals(rootcomponent.getElement(), mockument.getBodyElement().children[0]);

                assertEquals(1, rootcomponent.children.length);
                assertEquals(2, mockMessageBus.receivers.length);

                assertInstanceOf(CheckboxComponent, rootcomponent.children[0]);
                assertEquals(rootcomponent.children[0], mockMessageBus.receivers[0]);

                assertInstanceOf(BusBridgeClient, mockMessageBus.receivers[1]);
                const busBridgeClient = mockMessageBus.receivers[1] as BusBridgeClient;

                assertInstanceOf(BrowserWebSocketWrapper, busBridgeClient.webSocket);
                const webSocketWrapper = busBridgeClient.webSocket as BrowserWebSocketWrapper;

                assertEquals('ws://localhost:3000/', webSocketWrapper.webSocket.url);
            }
        ];
    }
}