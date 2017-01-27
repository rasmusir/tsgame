
import * as Express from "express";
import * as Http from "http";
import * as EJS from "ejs";

import {Test} from "./test";

export class WWWServer
{
    private app : Express.Application;
    private server : Http.Server;
    private router : Express.Router;
    constructor(port : number)
    {
        this.app = Express();
        this.app.set("view engine", "ejs");
        this.app.use("/content", Express.static("content"));
        
        this.defineRoutes();
        this.server = Http.createServer(this.app);
        this.server.listen(port, () => {
            console.log("Listening on port 9080");
        });
    }

    public GetHTTPServer() : Http.Server
    {
        return this.server;
    }

    private defineRoutes() : void
    {
        this.app.get("/", (req, res) => this.onRoot(req, res));
    }

    private onRoot(req:Express.Request, res:Express.Response) : void
    {
        res.render("index");
    }
}