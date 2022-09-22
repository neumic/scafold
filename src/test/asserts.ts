import { AssertionError } from "./AssertionError.js";
export function assertTrue(statement: any, message?: string) {
    if (message === undefined) {
        message = "expected true but was: " + statement;
    }
    if (!statement === true) {
        throw new AssertionError(message);
    }
}
export function assertFalse(statement: any) {
    const message = "expected false but was: " + statement;
    assertTrue(!statement, message);
}
export function assertEquals(expected: any, actual: any) {
    const message = "expected: [" + actual + "] to equal [" + expected + "]";
    assertTrue(expected === actual, message);
}

export function assertNotEquals(expected: any, actual: any) {
    const message = "expected: [" + actual + "] to NOT equal [" + expected + "]";
    assertTrue(expected !== actual, message);
}

export function assertWithinDelta(expected: number, actual: number | undefined, delta: number, additionalMessage = "") {
    const message = additionalMessage + " expected: [" + actual + "] to be within [" + delta + "] of [" + expected + "]"
    assertTrue(Math.abs(expected - assertNotNull(actual)) < delta, message);
}

export function assertGreaterThan(greater: any, lesser: any) {
    const message = "expected: [" + greater + "] to be greater than [" + lesser + "]";
    assertTrue(greater > lesser, message);
}

export function assertNotNull<Type>(object: Type | null | undefined): Type {
    const message = "expected: [" + object + "] to not be null";
    assertTrue(object !== null && object !== undefined, message);
    return object as Type;
}

export function assertThrows(exceptionType: any, methodOrLambdaWhichThrows: ()=>any): void{
    try {
       methodOrLambdaWhichThrows(); 
    } catch (error) {
        assertInstanceOf(exceptionType, error);
        return;
    }
    fail("No Exception thrown in assertThrows");
}

export function assertInstanceOf(type: any, instance: any){
    assertTrue(instance instanceof type, "expected: " + instance + " to be of type: " + type);
}

export async function assertAsyncThrows(methodOrLambdaWhichThrows: ()=>any): Promise<any> {
    try {
       await methodOrLambdaWhichThrows(); 
    } catch (error) {
        return error
    }
    fail("No Exception thrown in assertThrows");
}

export function fail(message = "fail() called") {
    assertTrue(false, message);
}
