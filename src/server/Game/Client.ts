import {Region} from "./Region";
import {WebSocketClient}from "../WebSocketClient";

const RandToken = require("rand-token");

export class Client
{
    private name : string;
    private currentRegion : Region;
    private socket : WebSocketClient;
    private id : string;

    constructor(socket : WebSocketClient)
    {
        this.id = RandToken.generate(5);
    }

    public get ID() : string
    {
        return this.id;
    }
}