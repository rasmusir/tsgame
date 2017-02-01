

import {GameObject} from "./GameObject";

/**
 * A dictionary containing GameObjects
 */
export class GameObjectDictionary
{
    private dictionary : Map<string, GameObject>
    constructor()
    {
        this.dictionary = new Map<string, GameObject>();
    }

    public Add(object : GameObject) : void
    {
        this.dictionary.set(object.ID, object);
    }

    public Remove(id : string) : void
    {
        this.dictionary.delete(id);
    }

    public Find(id : string) : GameObject
    {
        return this.dictionary.get(id);
    }

    public ForEach(func : ForEachCallback)
    {
        this.dictionary.forEach(func);
    }
}