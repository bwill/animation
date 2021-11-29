import { Student } from './student';
import { Player } from './player';

let frame1 = new Player(new Int16Array([ 0x1c, 0x22, 0x22, 0x22, 0x3c, 0x8, 0xc, 0x8, 0xe, 0x8, 0xc, 0x16, 0x12]));

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('#screen');

let context = canvas.getContext('2d')

for (var row in frame1.pixelRows) {
  // draw pixels
}

