
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
        if (this.handler !== null) this.handler.onConnect();
        this.ws.onmessage = event => this.handler.onMessage({data: event.data});
    }
}

export interface INetworkHandler
{
    onConnect() : void;
    onMessage(data : Message) : void;
}

export interface Message
{
    readonly data : any
}