import { AssertionError } from "./AssertionError.js";
import { TestCase } from "./TestCase.js";
import { TestCaseResult, TestResult } from "./TestResult.js";

export async function runAllTests(testSuite: TestCase[], printTests: (results: TestCaseResult[]) => void) {
    const testCaseResults: TestCaseResult[] = [];
    for (const testCase of testSuite) {
        const testResults: TestResult[] = [];

        for (const test of testCase.getTests()) {
            testResults.push(await runTest(testCase, test));
        }

        testCaseResults.push(new TestCaseResult(testCase.constructor.name, testResults));

    };
    printTests(testCaseResults);
}

export async function runTest(testCase: TestCase, test: () => void): Promise<TestResult> {
    let testResult: TestResult | null = null;

    try {
        console.debug(`running setup for: ${test.name}`);
        testCase.setup();

        console.debug(`running ${test.name}`);
        await test();

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();

        testResult = new TestResult(test.name, "Success", "Test Passed");
    } catch (failure) {
        if (failure instanceof AssertionError) {
            testResult = new TestResult(test.name, "Failure", failure.message);
        } else if (failure instanceof Error) {
            testResult = new TestResult(test.name, "Error", failure.message);
        } else {
            testResult = new TestResult(test.name, "Error", "Test Threw: " + failure);
        }
        console.warn(failure);

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();
    } finally {
        if (testResult === null) {
            testResult = new TestResult("Test Case Empty", "Failure", "No Test Results produced for this class, either it is empty or errored in the test runner");
        }
        return testResult;
    }
}