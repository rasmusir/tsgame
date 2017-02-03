import {WebSocketServer, IWebSocketServerHandler} from "./WebSocketServer";
import {WebSocketClient} from "./WebSocketClient";
import {Client} from "./Game/Client";
import {Region} from "./Game/Region";

export class GameServer implements IWebSocketServerHandler
{
    private wsServer : WebSocketServer;
    private region : Region;
    constructor(wsServer : WebSocketServer)
    {
        this.wsServer = wsServer;
    }

    onNewConnection(clientSocket : WebSocketClient) : void
    {
        let client = new Client(clientSocket);
        this.region.AddClient(client);
    }
}