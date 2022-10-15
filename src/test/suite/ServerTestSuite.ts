import { TestCase } from "../TestCase.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { UIMessageTest } from "./UIMessageTest.js";
import { BusBridgeServerTest } from "./BusBridgeServerTest.js";
import { SocketMessageTest } from "./SocketMessageTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";

export const testSuite: TestCase[] = [
    new UIMessageBusTest(),
    new UIMessageTest(),
    new BusBridgeServerTest(),
    new SocketMessageTest(),
    new MessageConverterTest(),
];