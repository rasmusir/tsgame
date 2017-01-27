import {WebSocketServer, IWebSocketServerHandler} from "./WebSocketServer";
import {WebSocketClient} from "./WebSocketClient";

export class GameServer implements IWebSocketServerHandler
{
    private wsServer : WebSocketServer;
    constructor(wsServer : WebSocketServer)
    {
        this.wsServer = wsServer;
    }

    onNewConnection(client : WebSocketClient) : void
    {
        
    }
}