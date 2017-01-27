import {WWWServer} from "./WWWServer";
import {WSServer} from "./WSServer";

const PORT = 9080;

class Program
{
    static Main() : void
    {
        let wwwServer = new WWWServer(PORT);
        let socketServer = new WSServer(wwwServer);
    }
}

Program.Main();