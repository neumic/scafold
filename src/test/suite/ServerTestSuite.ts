import { TestCase } from "../TestCase.js";
import { UIMessageBusTest } from "./UIMessageBusTest.js";
import { UIMessageTest } from "./UIMessageTest.js";

export const testSuite: TestCase[] = [
    new UIMessageBusTest(),
    new UIMessageTest(),
];