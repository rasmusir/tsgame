import * as Networking from "./Networking";
import IUpdatable from "./Game/IUpdatable";
import Region from "./Game/Region";

export class Game implements Networking.INetworkHandler
{
    private connection : Networking.Connection
    private scene : BABYLON.Scene
    private camera : BABYLON.FreeCamera;
    private engine : BABYLON.Engine;
    private canvas : HTMLCanvasElement;

    private children : IUpdatable[];

    constructor(canvas : HTMLCanvasElement)
    {
        this.connection = new Networking.Connection();
        this.connection.SetHandler(this);
        this.canvas = canvas;
        window.addEventListener("resize", () => this.Resize());

        this.engine = new BABYLON.Engine(canvas, false);

        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new BABYLON.FreeCamera(null, new BABYLON.Vector3(0, 5, -10), this.scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(this.canvas, false);
        this.camera.keysUp.push(87); // "w"
	    this.camera.keysDown.push(83); // "s"
	    this.camera.keysLeft.push(65); // "d"
	    this.camera.keysRight.push(68); // "a"

        let r = new Region(this.scene);
    }

    public Resize() : void
    {
        this.engine.resize();
    }

    public Start() : void
    {
        this.engine.runRenderLoop(() => {
            this.render();
        });
    }

    OnConnect()
    {
        console.log("Connected!");
    }

    OnMessage(data : Networking.IMessage)
    {

    }

    private update() : void
    {
        this.children.forEach(child => child.Update());
    }

    private render() : void
    {
        this.scene.render();
    }
}