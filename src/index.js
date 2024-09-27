const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   const parts = [];
	let result = '';
	for (let i = 0; i < expr.length; i += 10) {
		parts.push(expr.slice(i, i + 10)); 
	}
	parts.forEach(part => {
		let morseCode = '';
		if (part === '**********'){
			result += ' ';
		}
		else {
			
			for (let i = 0; i < 10; i += 2) {
				const pair = part.slice(i, i+2);
				if (pair === '10') { morseCode += '.';
				}
				if (pair === '11') { morseCode += '-';
				}	
			}
		}
		if (morseCode && MORSE_TABLE[morseCode]) {
                result += MORSE_TABLE[morseCode];
            } else if (morseCode) {
                result += '?';
            }
	});

	return result;
	
}

module.exports = {
    decode
}