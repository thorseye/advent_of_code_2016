export class Decoder {
	private columns: Array<Array<string>> = [];

	constructor(input: string) {
		let rows = input.split('\n').filter(v => v && v.length > 0);
		rows.forEach(row => {
			for (let i = 0; i < row.length; i++) {
				const char = row.charAt(i);
				if (!this.columns[i]) {
					this.columns[i] = [];
				}

				this.columns[i].push(char);
			}
		})
	}

	public decode(leastCommon = false) {
		let mostCommonCode = '';
		let leastCommonCode = '';
		let result = this.columns.forEach(column => {
			let sorted = column.sort((a, b) =>
				column.filter(val => val === a).length -
				column.filter(val => val === b).length);
			mostCommonCode += sorted.pop();
			leastCommonCode += sorted.reverse().pop();
		});

		if (leastCommon)
			return leastCommonCode;

		return mostCommonCode;
	}
}