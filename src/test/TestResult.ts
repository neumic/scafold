type TestResultType = "Success" | "Failure" | "Error";

export class TestCaseResult {
    testClassName: string;
    testResults: TestResult[];

    constructor(testClassName: string, testResults: TestResult[]) {
        this.testClassName = testClassName;
        this.testResults = testResults;
    }
}

export class TestResult {
    testName: string;
    testResult: TestResultType;
    testMessage: string;

    constructor(testName: string, testResult: TestResultType, testMessage: string) {
        this.testName = testName;
        this.testResult = testResult;
        this.testMessage = testMessage;
    }
}