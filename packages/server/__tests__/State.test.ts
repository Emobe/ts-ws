import test from "tape";
import { State } from "../src/State";

test("State<T>() should initialise with state", t => {
  const state = new State<any>();
  const actual = state.getState;
  const expected = {};
  t.deepEqual(actual, expected);
  t.end();
});
