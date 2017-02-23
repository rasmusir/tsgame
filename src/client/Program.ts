import {Game} from "./Game"

class Program
{

    public static Main() : void
    {
        let game = new Game(document.querySelector("#canvas") as HTMLCanvasElement);
        window.addEventListener("resize", () => game.Resize());
        game.Start();
    }
}

window.addEventListener("load", () => Program.Main());