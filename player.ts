export class Player {

    constructor(
        public pixelRows: Int16Array,
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) {
    }

    /**
     * name
     */
    public draw(canvas:CanvasRenderingContext2D) {
        let heightPerRow = this.height / this.pixelRows.length;
        let widthPerPixel = this.width / 16;
        var topY = this.y;
        var leftX = this.x;

        for (var row = 0; row < this.pixelRows.length; row++) {
            let bits = this.pixelRows[row];
            for (var bit = 0; bit < 16; bit++) {
                if (this.isBitSet(bit, bits)) {
                    this.drawPixel(canvas, leftX + bit * widthPerPixel, topY + row * heightPerRow, widthPerPixel, heightPerRow);
                }
            }
        }
    }

    private isBitSet(bit:number, row:number) : boolean {
        let mask = 1 << (15-bit)
        return (row & mask) != 0;
    }

    private drawPixel(canvas:CanvasRenderingContext2D, x:number, y:number, w:number, h:number) {
        canvas.fillRect(x, y, w, h);
    }
}