import { testSuite } from './suite/ServerTestSuite.js';
import { TestCaseResult } from './scaffold/TestResult.js';
import { runAllTests } from './scaffold/TestRunner.js';

function printTests(testCaseResults: TestCaseResult[]) {
    console.debug = (message) => { };
    console.warn = (message) => { };
    for (const testCaseResult of testCaseResults) {
        console.log(testCaseResult.testClassName + ":");
        for (const testResult of testCaseResult.testResults) {
            if (testResult.testResult === "Success") {
                console.log('\t+\x1b[32m%s\x1b[0m', testResult.testName + " SUCCESSFUL");
            } else if (testResult.testResult === "Failure") {
                console.log('\t+\x1b[31m%s\x1b[0m', testResult.testName + " FAILED with message: " + testResult.testMessage);
            } else if (testResult.testResult === "Error") {
                console.log('\t+\x1b[31m%s\x1b[0m', testResult.testName + " ERRORED with message: " + testResult.testMessage);
            }
        }
    }
}

runAllTests(testSuite, printTests);