import { testSuite } from './suite/ClientTestSuite.js';
import { TestCaseResult } from './TestResult.js';
import { runAllTests } from './TestRunner.js';

function printTests(testCaseResults: TestCaseResult[]) {
    console.log(testCaseResults);
    for (const testCaseResult of testCaseResults) {
        const testListElement = document.createElement('ul');
        const testCaseElement = document.createElement('details');
        const summaryElement = document.createElement('summary');

        summaryElement.append(testCaseResult.testClassName);
        testCaseElement.append(summaryElement);
        testCaseElement.append(testListElement);
        document.body.append(testCaseElement);

        for (const testResult of testCaseResult.testResults) {
            const testResultElement = document.createElement('li');

            if (testResult.testResult === "Success") {
                testResultElement.append(testResult.testName + " SUCCESSFUL");
                testResultElement.classList.add("passingTest");
            } else if (testResult.testResult === "Failure") {
                testResultElement.append(testResult.testName + " FAILED with message: " + testResult.testMessage);
                testResultElement.classList.add("failingTest");
                testCaseElement.classList.add("failingTest");
                testCaseElement.open = true;
            } else if (testResult.testResult === "Error") {
                testResultElement.append(testResult.testName + " ERRORED with message: " + testResult.testMessage);
                testResultElement.classList.add("failingTest");
                testCaseElement.classList.add("failingTest");
                testCaseElement.open = true;
            }

            testListElement.append(testResultElement);
        }
    }
}

runAllTests(testSuite, printTests);
