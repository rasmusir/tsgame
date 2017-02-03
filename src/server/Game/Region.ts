import {Client} from "./Client";

export class Region
{
    private clients : Map<string, Client>
    constructor()
    {
        this.clients = new Map<string, Client>();
    }

    public AddClient(client : Client)
    {
        this.clients.set(client.ID, client);
    }
}