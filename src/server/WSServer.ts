import * as WS from "ws"
import {WWWServer} from "./WWWServer"

export class WSServer
{
    constructor(wwwServer: WWWServer)
    {
        let server = new WS.Server({ server: wwwServer.GetHTTPServer() });
        server.on("connection", socket => this.onConnection(socket));
    }

    private onConnection(socket : WS)
    {
        console.log("Client connected!");
    }
}