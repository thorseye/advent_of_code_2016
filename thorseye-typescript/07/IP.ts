class Sequence {
	constructor(public value: string, public isHypernet: boolean) { }

	public hasAbba(): boolean {
		for (let i = 0; (i + 4) <= this.value.length; i++) {
			let str = this.value.substr(i, 4);
			let reverse = str.split('').reverse().join('');
			if (str == reverse && str.charAt(0) != str.charAt(1)) {
				return true;
			}
		}

		return false;
	}

	public getAbas(): string[] {
		let abas: string[] = [];
		for (let i = 0; (i + 3) <= this.value.length; i++) {
			let str = this.value.substr(i, 3);
			let reverse = str.split('').reverse().join('');
			if (str == reverse && str.charAt(0) != str.charAt(1)) {
				abas.push(str);
			}
		}

		return abas;
	}

	public hasAba(): boolean {
		return this.getAbas().length > 0;
	}
}

export class IP {
	public sequences: Sequence[] = [];

	constructor(public ip: string) {
		let parts = this.ip.match(/[a-z]+/g);
		for (let i = 0; i < parts.length; i++) {
			let hypernet = (i % 2) != 0;
			let sequence = new Sequence(parts[i], hypernet);
			this.sequences.push(sequence);
		}
	}

	public supportsTls(): boolean {
		let hasAbba = this.sequences.some(s => s.hasAbba());
		let hypernetHasAbba = this.sequences.filter(s => s.isHypernet).some(s => s.hasAbba());

		return hasAbba && !hypernetHasAbba;
	}

	public supportsSsl(): boolean {
		let abas: string[] = [];
		let hypernetsWithAba: string[] = [];
		this.sequences.filter(s => !s.isHypernet).forEach(s => {
			abas = abas.concat(s.getAbas())
		});
		this.sequences.filter(s => s.isHypernet).forEach(s => {
			hypernetsWithAba = hypernetsWithAba.concat(s.getAbas())
		});

		for (let aba of abas) {
			for (let haba of hypernetsWithAba) {
				let inverted = (haba.charAt(1) + haba.charAt(0) + haba.charAt(1));
				if (aba == inverted) {
					return true;
				}
			}
		}

		return false;
	}

}

export class IPFactory {
	public static make(ips: string): IP[] {
		return ips.split('\n').filter(ip => ip && ip.length).map(ip => new IP(ip));
	}
}