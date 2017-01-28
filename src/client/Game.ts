import * as Networking from "./Networking";

export class Game implements Networking.INetworkHandler
{
    private connection : Networking.Connection
    constructor()
    {
        this.connection = new Networking.Connection();
        this.connection.SetHandler(this);
    }

    OnConnect()
    {
        console.log("Connected!");
    }

    OnMessage(data : Networking.IMessage)
    {

    }
}