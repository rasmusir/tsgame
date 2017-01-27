import {WWWServer} from "./WWWServer";
import {WebSocketServer} from "./WebSocketServer";
import {GameServer} from "./GameServer";

const PORT = 9080;

class Program
{
    static Main() : void
    {
        let wwwServer = new WWWServer(PORT);
        let socketServer = new WebSocketServer(wwwServer);
        let gameServer = new GameServer(socketServer);
    }
}

Program.Main();