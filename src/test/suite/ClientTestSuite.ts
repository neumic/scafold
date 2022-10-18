import { TestCase } from "../scaffold/TestCase.js";
import { UIBuilderTest } from "./UIBuilderTest.js";
import { MessageBusTest } from "./MessageBusTest.js";
import { RootViewComponentTest } from "./RootViewComponentTest.js";
import { MessageTest } from "./MessageTest.js";
import { BusBridgeClientTest } from "./BusBridgeClientTest.js";
import { MessageConverterTest } from "./MessageConverterTest.js";
import { CheckboxComponentTest } from "./CheckboxComponentTest.js";

export const testSuite: TestCase[] = [
    new UIBuilderTest(),
    new MessageBusTest(),
    new RootViewComponentTest(),
    new MessageTest(),
    new BusBridgeClientTest(),
    new MessageConverterTest(),
    new CheckboxComponentTest(),
];