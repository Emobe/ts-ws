export declare class State<T> {
    private state;
    constructor();
    readonly getState: T;
    subscribe(callback: (value: T) => void): void;
}
