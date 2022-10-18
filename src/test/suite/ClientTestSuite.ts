import { TestCase } from "../scaffold/TestCase.js";
import { UIBuilderTest } from "./UIBuilderTest.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { RootViewComponentTest } from "./RootViewComponentTest.js";
import { MessageTest } from "./UIMessageTest.js";
import { BusBridgeClientTest } from "./BusBridgeClientTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";
import { CheckboxComponentTest } from "./CheckboxComponentTest.js";

export const testSuite: TestCase[] = [
    new UIBuilderTest(),
    new UIMessageBusTest(),
    new RootViewComponentTest(),
    new MessageTest(),
    new BusBridgeClientTest(),
    new MessageConverterTest(),
    new CheckboxComponentTest(),
];