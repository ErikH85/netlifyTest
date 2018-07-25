export class Human {
    id: number;
    name: string;

    constructor(name) {
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
}