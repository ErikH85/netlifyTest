import * as $ from 'jquery';
import Hero from './Hero';

let hero = new Hero('Batman');

$('h1').text(hero.myName());

console.log(hero.myName());