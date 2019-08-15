import test from "tape";
import { Room } from "../src/Room";
import { ObservableDictionary } from "@emobe/ts-collections";
import { Client } from "../src/Client";

test("Room() should create a room with a client collection", t => {
  class customRoom extends Room {}
  const actual = new customRoom();
  const expected = { clients: new ObservableDictionary<Client>() };
  t.deepEqual(actual, expected);
  t.end();
});
