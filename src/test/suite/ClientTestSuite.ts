import { TestCase } from "../TestCase.js";
import { UIBuilderTest } from "./UIBuilderTest.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { RootViewComponentTest } from "./RootViewComponentTest.js";
import { UIMessageTest } from "./UIMessageTest.js";
import { BusBridgeClientTest } from "./BusBridgeClientTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";

export const testSuite: TestCase[] = [
    new UIBuilderTest(),
    new UIMessageBusTest(),
    new RootViewComponentTest(),
    new UIMessageTest(),
    new BusBridgeClientTest(),
    new MessageConverterTest(),
];