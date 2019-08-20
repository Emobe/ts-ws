import test from "tape";
import sinon from "sinon";
import { Server } from "../packages/server/src/Server";
import { Client } from "../packages/client/src/Client";

test("ts-ws integration tests", t => {
  t.plan(2);
  const port = 1234;
  const server = new Server(port);
  const client = new Client(`ws://localhost:${port}`);
  client.connected = event => {
    t.assert(true);
    console.log("dfgdfgdgf");
  };
  client.messaging.respondTo("handshake", message => {
    console.log(message);
    t.assert(true);
  });
});
