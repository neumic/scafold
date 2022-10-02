import { TestCase } from "../TestCase.js";
import { UIBuilderTest } from "./UIBuilderTest.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { RootViewComponentTest } from "./RootViewComponentTest.js";
import { UIMessageTest } from "./UIMessageTest.js";
import { WebSocketBusBridgeClientTest } from "./WebSocketBusBridgeClientTest.js";

export const testSuite: TestCase[] = [
    new UIBuilderTest(),
    new UIMessageBusTest(),
    new RootViewComponentTest(),
    new UIMessageTest(),
    new WebSocketBusBridgeClientTest(),
];