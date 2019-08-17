import { ObservableDictionary, Dictionary } from "@emobe/ts-collections";
import { Client } from "./Client";
export abstract class Room {
  public clients = new ObservableDictionary<Client>();

  constructor() {}

  public add(key: string, client: Client) {
    this.clients.add(key, client);
  }
}
