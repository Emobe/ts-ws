import { List } from "@emobe/ts-collections";
import { State } from "./State";
export declare class ServerState {
    states: List<State<any>>;
    combine(...states: State<any>[]): void;
}
