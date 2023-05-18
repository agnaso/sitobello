$(document).ready(function() {
let alphabet = 'abcdefghijklmnopqrstuvwxyz.:;,""?!()/-ìèéàòù'.split('');
let symbols = '„Ω€®™æ¨œøπåß∂ƒ∞∆ªº¬∑†©√∫˜µ'.split('');
//let symbols = ['•','–','$'];
//console.log(alphabet.length, symbols.length);


	function translateText() {
		const testoOutput = $('#testo_output')[0];

		let promptContent = $('#testo_input').val();
		let dividedCharacters = promptContent.split("")
	    //console.log(dividedCharacters);

	    for (let i = 0; i < dividedCharacters.length; i++) {
	    	//console.log(dividedCharacters[i]);
	    	if (alphabet.includes(dividedCharacters[i])){
	    		//console.log(alphabet.indexOf(dividedCharacters[i]));
	    		//console.log(symbols[alphabet.indexOf(dividedCharacters[i])]);
	    		testoOutput.value += symbols[alphabet.indexOf(dividedCharacters[i])];
	    	} else if (dividedCharacters[i] == " ") {
	    	} else {
	    		testoOutput.value += dividedCharacters[i];
	    	}
	    }
	}
}
