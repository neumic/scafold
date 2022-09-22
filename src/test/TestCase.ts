export abstract class TestCase {
    public setup(): void {
    }

    public teardown(): void {
    }

    public abstract getTests(): (() => void)[];
}