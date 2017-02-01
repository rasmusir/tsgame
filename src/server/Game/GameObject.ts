//Could not find any typings, cannot be arsed to make any myself.
const RandToken = require("rand-token");

/**
 * Represents an object in the game environment
 */
export class GameObject
{
    private id : string
    constructor(id? : string)
    {
        this.id = id || RandToken.generate(5);
        console.log(this.id);
    }

    public get ID() : string
    {
        return this.id;
    }
}