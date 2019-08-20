import test from "tape";
import MessageHandler from "../src/MessageHandler";
import nanoid from "nanoid";
import msgpack from "msgpack";
import { Message } from "../src/Message";

test("Messaging tests", t => {
  t.plan(2);
  const handler = new MessageHandler();
  const message: Message = { action: "test" };
  const id = nanoid();
  const chainedData = "Hello!";
  const chainedMessage: Message = { action: "chained", data: chainedData };
  handler
    .respondTo("test", () => {
      t.assert(true, "responded to message");
    })
    .respondTo("chained", message => {
      console.log(message);
      t.deepEqual(
        message,
        chainedData,
        "responded to chained message + correct data"
      );
    });
  handler.handleMessage(msgpack.pack(message), id);
  handler.handleMessage(msgpack.pack(chainedMessage), id);
});
