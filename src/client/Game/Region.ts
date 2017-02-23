import IUpdatable from "./IUpdatable";

export default class Region implements IUpdatable
{
    Stasis : boolean;

    constructor(scene : BABYLON.Scene)
    {
        let mat = new BABYLON.PBRMaterial(null, scene);
        
        let skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
        let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.disableLighting = true;
        skybox.material = skyboxMaterial;
        
        var probe = new BABYLON.ReflectionProbe("satelliteProbe", 512, scene);
        probe.renderList.push(skybox);

        let sphere = BABYLON.MeshBuilder.CreateSphere(null, {segments : 16, diameter: 2}, scene)
        mat.reflectionTexture = probe.cubeTexture;
        mat.microSurface = 0.8;
        sphere.material = mat;
		probe.attachToMesh(sphere);
        let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    }

    Update() : void
    {

    }
}