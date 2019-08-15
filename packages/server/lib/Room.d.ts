import { ObservableDictionary } from "@emobe/ts-collections";
import { Client } from "./Client";
export declare abstract class Room {
    clients: ObservableDictionary<Client>;
    constructor();
    add(key: string, client: Client): void;
}
