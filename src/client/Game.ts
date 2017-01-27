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
        this.connection.send(new Uint8Array([1,2,3,4,5,6,7,8,9,0]));
    }

    OnMessage(data : Networking.IMessage)
    {

    }
}