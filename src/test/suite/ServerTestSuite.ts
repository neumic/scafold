import { TestCase } from "../scaffold/TestCase.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { MessageTest } from "./UIMessageTest.js";
import { BusBridgeServerTest } from "./BusBridgeServerTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";

export const testSuite: TestCase[] = [
    new UIMessageBusTest(),
    new MessageTest(),
    new BusBridgeServerTest(),
    new MessageConverterTest(),
];