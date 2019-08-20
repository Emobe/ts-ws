import test from "tape";
import { State } from "../src/State";
import { ServerState } from "../src/ServerState";

test("State<T>() should initialise with state", t => {
  const state = new State<any>();
  const actual = state.getState;
  const expected = {};
  t.deepEqual(actual, expected);
  t.end();
});

test("ServerState", t => {
  const state = new ServerState();
  t.end();
});
