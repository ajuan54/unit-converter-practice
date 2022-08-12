import "./styles.css";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let numberConvert = 0;
const btnEl = document.getElementById("convert-btn");
let number = document.getElementById("number");
//meter to feet
const meterNum = document.getElementById("meter");
const meterNumtoFeet = document.getElementById("meterToFeet");
const feetNum = document.getElementById("feet");
const feetNumtoMeter = document.getElementById("feetToMeter");

//liters to gallons
const literNum = document.getElementById("liter");
const literNumtoGal = document.getElementById("literstogallons");
const gallonNum = document.getElementById("gallons");
const gallonNumtoGal = document.getElementById("gallonstoliters");

//kilos to pound
const kiloNum = document.getElementById("kilos");
const kiloNumtoPound = document.getElementById("kilostopounds");
const poundNum = document.getElementById("pounds");
const poundNumToKilo = document.getElementById("poundstokilos");

btnEl.addEventListener("click", function () {
  //console.log("clicked");
  numberConvert = number.value;
  numMetertoFeet();
  numFeetToMeter();
  numLiterToGallon();
  numGallontoLiter();
  numKiloToPound();
  numPoundtoKilo();
});

function numMetertoFeet() {
  //numberConvert = number.value;
  meterNum.textContent = numberConvert;
  const meterToFeet = numberConvert * 3.28084;
  //console.log(meterToFeet);
  meterNumtoFeet.textContent = meterToFeet.toFixed(3);
}
function numFeetToMeter() {
  //numberConvert = number.value;
  feetNum.textContent = numberConvert;
  const feetToMeter = numberConvert * 0.3048;
  //console.log(feetToMeter);
  feetNumtoMeter.textContent = feetToMeter.toFixed(3);
}

function numLiterToGallon() {
  // numberConvert = number.value
  const literToGallon = numberConvert * 0.264172;
  literNum.textContent = numberConvert;
  literNumtoGal.textContent = literToGallon.toFixed(3);
}

function numGallontoLiter() {
  const gallonToLiter = numberConvert * 3.78541;
  gallonNum.textContent = numberConvert;
  gallonNumtoGal.textContent = gallonToLiter.toFixed(3);
}

function numKiloToPound() {
  const kiloToPound = numberConvert * 2.20462;
  kiloNum.textContent = numberConvert;
  kiloNumtoPound.textContent = kiloToPound.toFixed(3);
}

function numPoundtoKilo() {
  const poundToKilos = numberConvert * 0.453592;
  poundNum.textContent = numberConvert;
  poundNumToKilo.textContent = poundToKilos.toFixed(3);
}
