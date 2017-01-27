import * as WS from "ws";

export class WebSocketClient
{
    private socket : WS;
    constructor(socket : WS)
    {
        this.socket = socket;
        this.socket.on("message", data => this.onMessage(data));
        this.socket.on("close", data => this.onClose());
    }

    private onMessage(message : any) : void
    {
        console.log("A client sent this to the server: ", message);
    }

    private onClose() : void
    {
        console.log("client disconnected");
    }
}