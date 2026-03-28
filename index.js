/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
 
const inputNumEl = document.querySelector('input');
const convertBtnEl = document.querySelector("button");
const lengthPara = document.getElementById("length");
const volumePara = document.getElementById("volume");
const massPara = document.getElementById("mass");

function convert(val, from, To){
    if(from === "Meter" && To === "Feet") return val * 3.281;
    else if(from === "Feet" && To === "Meter") return val / 3.281;
    else if(from === "Liter" && To === "Gallon") return val * 0.264;
    else if(from === "Gallon" && To === "Liter") return val / 0.264;
    else if(from === "Kilogram" && To === "Pound") return val * 2.204;
    else if(from === "Pound" && To === "Kilogram") return val / 2.204;
}

function updateConversions(val) {
    // Length Conversion
    const meterToFeet = convert(val, "Meter", "Feet").toFixed(3);
    const feetToMeter = convert(val, "Feet", "Meter").toFixed(3);
    lengthPara.textContent = `${val} Meter = ${meterToFeet} Feet | ${val} Feet = ${feetToMeter} Meter`;
    
    // Volume Conversion
    const literToGallon = convert(val, "Liter", "Gallon").toFixed(3);
    const gallonToLiter = convert(val, "Gallon", "Liter").toFixed(3);
    volumePara.textContent = `${val} Liter = ${literToGallon} Gallon | ${val} Gallon = ${gallonToLiter} Liter`;
    
    // Mass Conversion
    const kilogramToPound = convert(val, "Kilogram", "Pound").toFixed(3);
    const poundToKilogram = convert(val, "Pound", "Kilogram").toFixed(3);
    massPara.textContent = `${val} Kilogram = ${kilogramToPound} Pound | ${val} Pound = ${poundToKilogram} Kilogram`;
}

convertBtnEl.addEventListener('click', function(){
    const ipNum = Number(inputNumEl.value);
    updateConversions(ipNum);
}); 
