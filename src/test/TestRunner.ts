import { AssertionError } from "./AssertionError.js";
import { TestCase } from "./TestCase.js";
import { TestCaseResult, TestResult } from "./TestResult.js";


export async function runTestCase(testCase: TestCase, test: () => void): Promise<TestCaseResult> {
    const testResultList: TestResult[] = [];

    try {
        console.debug(`running setup for: ${test.name}`);
        testCase.setup();

        console.debug(`running ${test.name}`);
        await test();

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();

        testResultList.push(new TestResult(test.name, "Success", "Test Passed"));
    } catch (failure) {
        if (failure instanceof AssertionError) {
            testResultList.push(new TestResult(test.name, "Failure", failure.message));
        } else if (failure instanceof Error) {
            testResultList.push(new TestResult(test.name, "Error", failure.message));
        } else {
            testResultList.push(new TestResult(test.name, "Error", "Test Threw: " + failure));
        }
        console.warn(failure);

        console.debug(`running teardown for ${test.name}`);
        testCase.teardown();
    } finally {
        if (testResultList.length === 0) {
            testResultList.push(new TestResult("Test Case Empty", "Failure", "No Test Results produced for this class, either it is empty or errored in the test runner"));
        }
        return new TestCaseResult(testCase.constructor.name, testResultList);
    }
}