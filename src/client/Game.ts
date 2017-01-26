import * as Networking from "./Networking";

class Game implements Networking.INetworkHandler
{
    private connection : Networking.Connection
    constructor()
    {
        this.connection = new Networking.Connection();
    }

    onConnect()
    {
        console.log("Connected!");
    }

    onMessage(data : Networking.Message)
    {

    }
}