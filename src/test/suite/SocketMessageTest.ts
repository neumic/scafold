import { fail } from "assert";
import { TestCase } from "../TestCase.js";

export class SocketMessageTest extends TestCase {
    public getTests(): (() => void)[] {
        return [
            function testme() {
                fail();
            }
        ];
    }
}