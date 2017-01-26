
import * as Express from "express";
import * as Http from "http";
import * as WS from "ws";
import * as EJS from "ejs";

import {Test} from "./test";

export class WWWServer
{
    private app : Express.Application;
    private router : Express.Router;
    constructor()
    {
        this.app = Express();
        this.app.set("view engine", "ejs");
        this.app.get("/", (req, res) => this.onRoot(req, res));

        this.app.listen(9080, () => {
            console.log("Listening on port 9080");
        });
    }

    onRoot(req:Express.Request, res:Express.Response) : void
    {
        res.render("index");
    }
}