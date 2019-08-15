//import { Message } from "./Message";
//import { RoomManager } from "../Room/RoomManager";
//import { ClientCollection } from "../Client/ClientCollection";
//import { Lobby } from "../Room/Lobby";
//import { runInThisContext } from "vm";
//
//export class MessageHandler {
//roomManager: RoomManager;
//clients: ClientCollection;
//lobby: Lobby;
//constructor(roomManager: RoomManager, clients: ClientCollection) {
//this.roomManager = roomManager;
//this.clients = clients;
//this.lobby = this.roomManager.Rooms.lobby as Lobby;
//}
//
//public handleMessage(data: any) {
//data = JSON.parse(data);
//console.log(data);
//switch (data.action) {
//case "handshake":
////this.roomManager.join('Lobby', )
//break;
//case "rooms":
//this.sendMessage(data.from, data.action, this.lobby.Games);
//case "createGame":
//console.log("creating");
//this.lobby.createGame();
//this.sendMessage(data.from, "refreshRooms", this.lobby.Games);
//break;
//}
//}
//
//private sendMessage(to: string, action: string, data: any) {
//console.log(to);
//this.clients.Items[to].send({ action, data });
//}
//}
//
//# sourceMappingURL=MessageHandler.js.map