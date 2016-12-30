export class Section {
	constructor(public compressed: string, private recursive = false) {
		this.compressed = this.compressed.replace(/\s+/g, '');
	}

	public decompressedLength(): number {
		let length = 0;
		let c = 0;
		while (c < this.compressed.length) {
			if (this.compressed.charAt(c) !== '(') {
				length++;
				c++;
				continue;
			}

			const rest = this.compressed.substr(c);
			let markerResult = rest.match(/\((\d+)x(\d+)\)/);

			const marker = markerResult[0];
			const letters = parseInt(markerResult[1], 10);
			const repeat = parseInt(markerResult[2], 10);

			const subSection = new Section(rest.substr(marker.length, letters), this.recursive);
			const decompressedLength = subSection.decompressedLength() * repeat;

			length += decompressedLength;
			c += marker.length + letters;
		}
		return length;
	}

	public decompress(): string {
		let decompressed = '';
		let c = 0;
		while (c < this.compressed.length) {
			let next = 1;
			const char = this.compressed.charAt(c);
			if (char == '(') {
				const rest = this.compressed.substr(c);
				const markerResult = rest.match(/\((\d+)x(\d+)\)/);
				const marker = markerResult[0];
				const letters = parseInt(markerResult[1], 10);
				const repeat = parseInt(markerResult[2], 10);
				next = marker.length + letters;
				const lettersToRepeat = rest.substr(marker.length, letters);

				decompressed += Array(repeat).fill(lettersToRepeat).join('');
				c += next;
			} else {
				decompressed += char;
				c++;
			}

		}

		decompressed = decompressed.replace(/\s+/g, '');

		if (this.recursive && decompressed.indexOf('(') > -1) {
			decompressed = new Section(decompressed, this.recursive).decompress();
		}

		return decompressed;
	}
}