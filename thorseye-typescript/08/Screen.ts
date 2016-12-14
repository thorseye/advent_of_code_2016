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

	public rotateRow(row: number, pixels: number) {
		let newRow = [];
		for (let i = 0; i < this.pixels[row].length; i++) {
			let moveTo = i + pixels;
			while (moveTo >= this.pixels[row].length) {
				moveTo -= this.pixels[row].length;
			}
			newRow[moveTo] = this.pixels[row][i];
		}
		this.pixels[row] = newRow;
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

	public readInstructions(input: string) {
		input.split('\n').filter(line => line && line.length).forEach(line => {
			let rect = line.match(/rect (\d+)x(\d+)/)
			if (rect) {
				const width = parseInt(rect[1], 10);
				const height = parseInt(rect[2], 10);
				console.log(line, " | rect ", width, height);
				this.rect(width, height);
			}

			let row = line.match(/rotate row y=(\d+) by (\d+)/);
			if (row) {
				const r = parseInt(row[1], 10);
				const p = parseInt(row[2], 10);
				this.rotateRow(r, p);
			}

			let column = line.match(/rotate column x=(\d+) by (\d+)/);
			if (column) {
				const c = parseInt(column[1], 10);
				const p = parseInt(column[2], 10);
				this.rotateColumn(c, p);
			}
		});
	}

	public countLitPixels(): number {
		let count = 0;
		for (let row of this.pixels) {
			for (let pixel of row)  {
				if (pixel.lit) {
					count++;
				}
			}
		}

		return count;
	}
}
