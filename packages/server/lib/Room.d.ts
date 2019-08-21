import { ObservableDictionary, KeyPair } from "@emobe/ts-collections";
import { Client } from "./Client";
export declare abstract class Room {
    private clients;
    private id;
    clients$: import("rxjs").Observable<KeyPair<Client>>;
    constructor(id?: string);
    add(key: string, client: Client): void;
    onUpdate: (clients: KeyPair<Client>) => void;
    remove(key: string): void;
    readonly Clients: ObservableDictionary<Client>;
}
