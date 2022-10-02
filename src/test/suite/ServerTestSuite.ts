import { TestCase } from "../TestCase.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { UIMessageTest } from "./UIMessageTest.js";
import { WebSocketBusBridgeServerTest } from "./WebSocketBusBridgeServerTest.js";

export const testSuite: TestCase[] = [
    new UIMessageBusTest(),
    new UIMessageTest(),
    new WebSocketBusBridgeServerTest()
];