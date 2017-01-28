import * as Networking from "./Networking";

export class Game implements Networking.INetworkHandler
{
    private connection : Networking.Connection
    private scene : THREE.Scene
    private renderer : THREE.Renderer;
    private camera : THREE.PerspectiveCamera;
    constructor()
    {
        this.connection = new Networking.Connection();
        this.connection.SetHandler(this);

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(85, 1, 0.1, 1000);
    }

    public GetWebGLElement() : HTMLElement
    {
        return this.renderer.domElement;
    }

    public SetResolution(width : number, height: number) : any
    {
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    public Start() : void
    {
        this.render();
    }

    OnConnect()
    {
        console.log("Connected!");
    }

    OnMessage(data : Networking.IMessage)
    {

    }

    private render() : void
    {
        requestAnimationFrame(() => this.render());
        this.renderer.render(this.scene, this.camera);
    }
}