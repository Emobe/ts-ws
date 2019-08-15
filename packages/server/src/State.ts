import { BehaviorSubject } from "rxjs";

export class State<T> {
  private state: BehaviorSubject<T>;
  constructor() {
    this.state = new BehaviorSubject<T>({} as T);
  }

  get getState(): T {
    return this.state.value;
  }
}
