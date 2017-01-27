
export class Connection
{
    private ws : WebSocket;
    private handler : INetworkHandler;
    constructor()
    {
        this.ws = new WebSocket("ws://" + location.host);
        this.ws.onopen = event => this.onOpen(event);
    }

    public SetHandler(handler : INetworkHandler)
    {
        this.handler = handler;
    }

    private onOpen(event : Event) : void
    {
        if (this.handler) this.handler.OnConnect();
        this.ws.onmessage = event => this.handler.OnMessage({data: event.data});
    }

    public send(data : any) : void
    {
        this.ws.send(data);
    }
}

export interface INetworkHandler
{
    OnConnect() : void;
    OnMessage(data : IMessage) : void;
}

export interface IMessage
{
    readonly data : Uint8Array;
}