function myFunction() {
    document.getElementById("btn2").style.display = "block";
}

function getRandomInt(myEl) {
  return Math.floor(Math.random() * myEl);
}

function printMyPercent(){
	let paroleACaso = ['Composition of the Italian Parliament 31% are women and 69% are men. (2022)', 'In Italy, women managers make up just 27.0% of the total number of managers. (2018)', 'c', 'ciao', "pollo", 'pranzo', 'mezzogiorno', 4, 23, 56];
	let randomNumber = getRandomInt(paroleACaso.length-1);
	$('#suggestion')[0].innerText = paroleACaso[randomNumber];
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let symbols = 'abcdefghijklmnopqrstuvwxyz'.split('');

function translateText() {
	const testoOutput = $('#testo_output')[0];

	let promptContent = $('#testo_input').val();
	let dividedCharacters = promptContent.split("");

	testoOutput.value = '';

    for (let i = 0; i < dividedCharacters.length; i++) {
    	//console.log(dividedCharacters[i]);
    	if (alphabet.includes(dividedCharacters[i])){
    		testoOutput.value += symbols[alphabet.indexOf(dividedCharacters[i])];
    	} else if (dividedCharacters[i] == " ") {
    	} else {
    		testoOutput.value += dividedCharacters[i];
    	}
    }
    myFunction();
    printMyPercent();
}


//mia prova delusional
function startDownload() {
    // access the text from the input field
    let user_input = $('#testo_output');
    let texts = $('#testo_output').val();
     
    // Create dummy <a> element using JavaScript.
    var hidden_a = document.createElement('a');
     
    // add texts as a href of <a> element after encoding.
    hidden_a.setAttribute('href', 'data:text/plain;charset=utf-8, '+ encodeURIComponent(texts));
     
    // also set the value of the download attribute
    hidden_a.setAttribute('download', "hyperknit");
    document.body.appendChild(hidden_a);
     
    hidden_a.click();
    document.body.removeChild(hidden_a);
}

function stampaContenuto() {
      var textareaValue = document.getElementById("testo_output").value;
      
      // Creazione di un nuovo documento PDF
      var doc = new jsPDF();

      doc.setFont("knitmorse");
      
      // Aggiunta del contenuto della textarea al documento PDF
      doc.text(textareaValue, 10, 10,);
      
      // Salvataggio del documento PDF come file
      doc.save("hyperknit.pdf");
    }
