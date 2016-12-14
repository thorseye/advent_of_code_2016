export class Pixel {
	private _lit: boolean = false;

	public set lit(l: boolean) {
		this._lit = l;
	}

	public get lit(): boolean { return this._lit; }

	public draw(): string {
		return this._lit ? '#' : '.';
	}
}

export class Screen {
	private pixels: Pixel[][] = [];

	constructor(private width: number, private height: number) {
		for (let h = 0; h < height; h++) {
			this.pixels[h] = [];
			for (let w = 0; w < width; w++) {
				this.pixels[h][w] = new Pixel();
			}
		}
	}

	public rect(width: number, height: number) {
		for (let h = 0; h < height; h++) {
			for (let w = 0; w < width; w++) {
				this.pixels[h][w].lit = true;
			}
		}
	}

	public rotateColumn(column: number, pixels: number) {
		let newCol = [];
		// for (let i = 0; i < this.pixels.length; i++) {
		// 	newCol.push(new Pixel());
		// }


		for (let i = 0; i < this.pixels.length; i++) {
			let moveTo = i + pixels;
			while (moveTo >= this.pixels.length) {
				moveTo -= this.pixels.length;
			}
			newCol[moveTo] = this.pixels[i][column];
		}

		for (let i = 0; i < this.pixels.length; i++) {
			this.pixels[i][column] = newCol[i];
		}
	}

	public draw() {
		let str = ``;
		for (let row of this.pixels) {
			for (let col of row) {
				str += col.draw();
			}
			str += '\n';
		}
		console.log(str);
	}
}
