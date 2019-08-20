import { ObservableDictionary, KeyPair } from "@emobe/ts-collections";
import { Client } from "./Client";
export abstract class Room {
  private clients = new ObservableDictionary<Client>();
  private id: string;

  public clients$ = this.clients.items$;
  constructor(id?: string) {
    this.id = id;
  }

  public add(key: string, client: Client) {
    this.clients.add(key, client);
  }

  public set onUpdate(callback: (clients: KeyPair<Client>) => void) {
    this.clients.items$.subscribe(callback);
  }

  public remove(key: string) {
    this.clients.remove(key);
  }

  public get Clients() {
    return this.clients.Items;
  }
}
