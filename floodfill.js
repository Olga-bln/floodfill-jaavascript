'use strict';

const bitmap = [
"................**********........................",
"...............*..........*.......................",
"..........*****............*........*.............",
".........*.................*.......*.*....*****...",
"........*................***......*...*.**.....**.",
"....****.................*.......*.....*.........*",
"..**......................*******................*",
".*................................................*",
".*...............................................*",
"*...........****.............................****.",
"*..........*....*.........................***.....",
".*.........*....*.......................**........",
"..***.......****.......................*..........",
".....****......................******..*..........",
".........**********************.....****.........."
];

const bildArr = bitmap.map(testFunction);


function testFunction(bitmap) {
  return bitmap.split('');
}





//Hauptfunktion floodFill
const floodFill = (reihe, spalte) => {
  

  
  //Unsere Wunschfuellung
let fuellung = '*';
let bild = bildArr;

	
//ausgangspunkt-Konstruktion
	const ausgangsPunkt = bild[reihe][spalte];
  
  /* Tests
  console.log(ausgangsPunkt);
  console.log(fuellung);
  console.log(reihe);
  console.log(spalte);
  */
  

//Bedingungen
if(ausgangsPunkt === fuellung) {
	return bild;
  
  
}

//Sonst diese Funktion ausfuehren

fuelle(bild, reihe, spalte, fuellung, ausgangsPunkt);
  
//sichtbare Ausgabe  
return bild.map((reiheAusgabe) => reiheAusgabe.join('')).join('\n');
};

const fuelle = (bild, reihe, spalte, fuellung, ausgangsPunkt) => {
	
//Bedingungen
if	(reihe < 0) {
	return;
}

if(spalte < 0) {
	return;
}

if(reihe > bild.length - 1) {
	return;
}

if(spalte > bild[reihe].length - 1) {
	return;
}

if(bild[reihe][spalte] !== ausgangsPunkt) {
	return;
}

bild[reihe][spalte] = fuellung;
	
	
//Anwendung fuer alle vier Richtungen

	fuelle(bild, reihe - 1, spalte, fuellung, ausgangsPunkt);
	fuelle(bild, reihe + 1, spalte, fuellung, ausgangsPunkt);
	fuelle(bild, reihe, spalte -1, fuellung, ausgangsPunkt);
	fuelle(bild, reihe, spalte + 1, fuellung, ausgangsPunkt);
	
}

//Testausgabe
console.log(floodFill(8, 7));
	
	
	
	
	
	
	
	
	

