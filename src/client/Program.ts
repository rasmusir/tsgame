import {Game} from "./Game"

class Program
{

    public static Main() : void
    {
        let game = new Game();
        document.body.appendChild(game.GetWebGLElement());
        game.SetResolution(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => game.SetResolution(window.innerWidth, window.innerHeight));
        game.Start();
    }
}

window.addEventListener("load", () => Program.Main());