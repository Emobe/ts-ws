import test from "tape";
import { MessageHandler } from "../src/MessageHandler";
import nanoid from "nanoid";
import msgpack from "msgpack";
import { Message } from "../src/Message";

test("Messaging tests", t => {
  const handler = new MessageHandler();
  const message: Message = { action: "test" };
  const id = nanoid();
  handler.respondTo("test", () => {
    t.assert(true, "server responded to message");
    t.end();
  });
  handler.handleMessage(msgpack.pack(message), id);
});
