import { List } from "@emobe/ts-collections";
import { State } from "./State";

export class ServerState {
  public states = new List<State<any>>();
  public combine(...states: State<any>[]) {}
}
