import { AssertionError } from './AssertionError.js';
import { testSuite } from './suite/testSuite.js';
import { TestCase } from "./TestCase.js";

async function runAllTests() {
    for (const testCase of testSuite) {
        const testCaseElement = document.createElement('details');
        const testListElement = document.createElement('ul');
        const summaryElement = document.createElement('summary');

        summaryElement.append(testCase.constructor.name);
        testCaseElement.append(summaryElement);
        testCaseElement.append(testListElement);
        document.body.append(testCaseElement);

        for (const test of testCase.getTests()) {
            await runTestCase(testCase, test, testCaseElement, testListElement);
        }
    };
}

async function runTestCase(testCase: TestCase, test: () => void, 
        testCaseElement: HTMLDetailsElement, testListElement: HTMLUListElement): Promise<void> {
    const testResultElement = document.createElement('li');
    try {
        console.debug(`running setup for: ${test.name}`);
        testCase.setup();

        console.debug(`running ${test.name}`);
        await test();

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();

        testResultElement.append(test.name + " SUCCESSFUL");
        testResultElement.classList.add("passingTest");
    } catch (failure) {
        if (failure instanceof AssertionError) {
            testResultElement.append(test.name + " FAILED with message: " + failure.message);
        } else if (failure instanceof Error) {
            testResultElement.append(test.name + " ERRORED with message: " + failure.message);
        } else {
            testResultElement.append(test.name + " ERRORED: " + failure);
        }
        console.warn(failure);
        testResultElement.classList.add("failingTest");
        testCaseElement.classList.add("failingTest");
        testCaseElement.open = true

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();
    } finally {
        testListElement.append(testResultElement);
    }
}

runAllTests();
