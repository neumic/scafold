import { TestCase } from "../scaffold/TestCase.js";
import { MessageBusTest } from "./MessageBusTest.js";
import { MessageTest } from "./MessageTest.js";
import { BusBridgeServerTest } from "./BusBridgeServerTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";
import { WebSocketConnectionTest } from "./WebSocketConnectionTets.js";

export const testSuite: TestCase[] = [
    new MessageBusTest(),
    new MessageTest(),
    new BusBridgeServerTest(),
    new MessageConverterTest(),
    new WebSocketConnectionTest(),
];