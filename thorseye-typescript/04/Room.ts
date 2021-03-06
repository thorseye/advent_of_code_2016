export class Room {
	public real: boolean
	public name: string;
	public sectorId: number;
	public checksum: string;
	public fiveMax: string[];

	constructor(id: string) {
		// aaaaa-bbb-z-y-x-123[abxyz]
		const r = /([a-z-]+(?=-\d+))-(\d+)\[(.*)\]/;
		const result = r.exec(id);
		this.name = result[1];
		this.sectorId = parseInt(result[2], 10);
		this.checksum = result[3];

		this.fiveMax = this.countLetters(this.name.replace(/-/g, ''));

		this.real = this.fiveMax.join('') == this.checksum;
	}

	private countLetters(name: string) {
		let letters: { key: string, count: number }[] = [];
		for (let c = 0; c < name.length; c++) {
			let char = name.charAt(c);
			let letter = letters.find(letter => char == letter.key);
			if (!letter) {
				letter = { key: char, count: 0 };
				letters.push(letter);
			}

			letter.count++;
		}

		let fiveMax = letters.sort((a, b) => {
			if (a.count > b.count)
				return -1;
			if (a.count < b.count)
				return 1;
			return a.key.localeCompare(b.key);
		}).slice(0, 5).map(l => l.key);
		return fiveMax;
	}

	public decrypt(): string {
		let first = 'a'.charCodeAt(0);
		let last = 'z'.charCodeAt(0);
		let aToZ = ((first: number, last: number): string[] => {
			let chars: string[] = [];
			for (let i = first; i <= last; i++) {
				const char = String.fromCharCode(i);
				chars.push(char);
			}
			return chars;
		})(first, last);


		let decrypted = '';
		for (let c = 0; c < this.name.length; c++) {
			const char = this.name.charAt(c);
			const charCode = this.name.charCodeAt(c);

			if (char == '-') {
				decrypted += ' ';
			} else {
				let newCharCode = (charCode - first + this.sectorId) % aToZ.length + first;
				decrypted += String.fromCharCode(newCharCode);
			}
		}
		return decrypted;
	}
}

export class RoomFactory {
	public static make(input: string): Room[] {
		const rooms = input
			.split(/\s+/)
			.filter(id => id && id.trim().length)
			.map(id => new Room(id));

		return rooms;
	}
}