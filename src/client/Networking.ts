
export class Connection
{
    private ws : WebSocket;
    private handler : INetworkHandler;
    constructor()
    {
        this.ws = new WebSocket("ws://" + location.host);
        this.ws.onopen = event => this.onOpen(event);
    }

    private onOpen(event : Event) : void
    {
        if (this.handler !== null) this.handler.OnConnect();
        this.ws.onmessage = event => this.handler.OnMessage({data: event.data});
    }
}

export interface INetworkHandler
{
    OnConnect() : void;
    OnMessage(data : Message) : void;
}

export interface Message
{
    readonly data : any
}