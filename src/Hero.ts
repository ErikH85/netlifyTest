import { Human } from './Human';

export class Hero extends Human {
    constructor(name) {
        super(name);
    }
}

export default Hero;

class HelloWorld {
    constructor() {
        console.log('Hello World!');
    }
}