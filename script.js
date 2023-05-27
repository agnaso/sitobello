function myFunction() {
    document.getElementById("btn2").style.display = "block";
}

function getRandomInt(myEl) {
  return Math.floor(Math.random() * myEl);
}

function printMyPercent(){
	let paroleACaso = ['W 31% M 69% - Composition of the Parliament (2022)','W 43.1% M 56.9% - Share of ministers (2022)','W 22.8% M 77.2% - Share of members of regional assemblies (2022)','W 39.6% M 60.4% - Share of members of boards in largest quoted companies, supervisory board or board of directors (2022)','W 26.1% M 73.9% - Share of members of highest decision making body of the national Olympic sport organisations (2022)'];
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
      
      var doc = new jsPDF();

      doc.setFont('knitmorse', 'normal');
      //doc.setFont('knitmorse');
      //doc.setFontType('normal');

      doc.text(textareaValue, 10, 10,);
      
      doc.save("hyperknit.pdf");
       
    }
