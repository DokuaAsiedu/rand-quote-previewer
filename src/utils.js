export function randomHex() {
	let hex = "";
	for (let i = 0; i < 3; i++) {
		const rand = Math.floor(Math.random() * 128);
		const hexComp = rand.toString(16).padStart(2, "0");
		hex += hexComp;
	}

	return hex;
}
