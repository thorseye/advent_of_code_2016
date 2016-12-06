import md5 = require('md5');

export class Door {
	public password: string = '';
	constructor(id: string) {
		let i = 0;
		while (this.password.length < 8) {
			while (true) {
				let toBeHashed = id + i.toString();
				i++;
				let hash = md5(toBeHashed);
				if (hash.startsWith('00000')) {
					this.password += hash.charAt(5);
					console.log('Found a password hash:', hash);
					console.log('Password is now: ', this.password);
					break;
				}
			}
		}
		console.log('password:', this.password);
	}
}