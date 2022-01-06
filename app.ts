import { Student } from './student';
import { Player } from './player';

let player = new Player(new Int16Array([0x1c, 0x22, 0x22, 0x22, 0x3c, 0x8, 0xc, 0x8, 0xe, 0x8, 0xc, 0x16, 0x12]),
    10, 10, 50, 50);

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('screen');

let context = canvas.getContext('2d')

player.draw(context);

