import * as WS from "ws";
import {WWWServer} from "./WWWServer";
import {WebSocketClient} from "./WebSocketClient";

export class WebSocketServer
{
    private handler : IWebSocketServerHandler
    constructor(wwwServer: WWWServer)
    {
        let server = new WS.Server({ server: wwwServer.GetHTTPServer() });
        server.on("connection", socket => this.onConnection(socket));
    }

    private onConnection(socket : WS) : void
    {
        let client = new WebSocketClient(socket);
        if (this.handler) this.handler.onNewConnection(client);
    }
}

export interface IWebSocketServerHandler
{
    onNewConnection(client : WebSocketClient) : void
}