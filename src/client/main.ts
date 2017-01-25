import * as socketIO from "socket.io";

class TestClass
{
    private privateNumber : number
    public PublicNumber : number
    constructor()
    {
        this.privateNumber = 51;
        this.PublicNumber = 42;

        let socket = new socketIO();
    }
}

let tc = new TestClass();