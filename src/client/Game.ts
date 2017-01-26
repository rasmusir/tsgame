import * as Networking from "./Networking";

class Game implements Networking.INetworkHandler
{
    private connection : Networking.Connection
    constructor()
    {
        this.connection = new Networking.Connection();
    }

    OnConnect()
    {
        console.log("Connected!");
    }

    OnMessage(data : Networking.Message)
    {

    }
}