import md5 = require('md5');

export class Door {
	constructor(private id: string) { }

	public getPasswordPuzzle1() {
		let password = '';
		let i = 0;
		while (password.length < 8) {
			while (true) {
				let toBeHashed = this.id + i.toString();
				i++;

				let hash = md5(toBeHashed);
				if (hash.startsWith('00000')) {
					password += hash.charAt(5);
					console.log('Found a password hash:', hash);
					console.log('Password is now: ', password);
					break;
				}
			}
		}
		return password;
	}

	public getPasswordPuzzle2() {
		let password = [];
		let finalPassword = '';
		let i = 0;
		while (finalPassword.length < 8) {
			while (true) {
				let toBeHashed = this.id + i.toString();
				i++;

				let hash = md5(toBeHashed);
				if (hash.startsWith('00000')) {
					let position = parseInt(hash.charAt(5), 10);
					console.log('Found a password hash:', hash);
					if (isFinite(position) && position < 8) {
						if (password[position]) {
							console.log(`  (${position} is already populated: ${password[position]})`)
						} else {
							password[position] = hash.charAt(6);
							finalPassword = password.filter(p => p && p.length > 0).join('');
							console.log('Password is now: ', password.join(''));
						}
						break;
					} else {
						console.log(`  (${position} is not in the correct interval, continuing...)`);
					}
				}
			}
		}
		return finalPassword;
	}
}