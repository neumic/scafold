import { testSuite } from './suite/ClientTestSuite.js';
import { TestCaseResult } from './TestResult.js';
import { runTestCase } from './TestRunner.js';

async function runAllTests() {
    console.debug = (message) => { };
    console.warn = (message) => { };

    for (const testCase of testSuite) {
        const results: TestCaseResult[] = [];

        for (const test of testCase.getTests()) {
            results.push(await runTestCase(testCase, test));
        }

        printTests(results);
    };
}

function printTests(testCaseResults: TestCaseResult[]) {
    for (const testCaseResult of testCaseResults) {
        console.log(testCaseResult.testClassName);
        for (const testResult of testCaseResult.testResults) {
            if (testResult.testResult === "Success") {
                console.log('\x1b[32m%s\x1b[0m', testResult.testName + " SUCCESSFUL");
            } else if (testResult.testResult === "Failure") {
                console.log('\x1b[31m%s\x1b[0m', testResult.testName + " FAILED with message: " + testResult.testMessage);
            } else if (testResult.testResult === "Error") {
                console.log('\x1b[31m%s\x1b[0m', testResult.testName + " ERRORED with message: " + testResult.testMessage);
            }
        }
    }
}

runAllTests();