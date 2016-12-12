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
}

export class IP {
	private sequences: Sequence[] = [];

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

}

export class IPFactory {
	public static make(ips: string): IP[] {
		return ips.split('\n').filter(ip => ip && ip.length).map(ip => new IP(ip));
	}
}