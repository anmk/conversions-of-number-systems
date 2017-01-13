/* ==================================================================================== 
 *  Conversion of number systems
 *  Author: Andrzej Kałowski
 *  $id: todecimal.js
 *  ===================================================================================
 *  Using in the console browser:
 *  fromHexadecimal1.toDecimal()
 *  fromOctal1.toDecimal()
 *  fromBinary1.toDecimal()
 *  =================================================================================== */

function NumberSystems(numberToConvert, hex, basePower, info) {
  this._numberToConvert = numberToConvert;
  this._hex = hex;
  this._basePower = basePower;
  this._info = info;
  this._name = "";
  this._convertedArray = [];
}

NumberSystems.prototype.toDecimal = function() {
  var nibble = 0;
  var weightNumber;
  var j = 0;
  var exponent = 0;
  var weightArray = [];
  var inputString = this._numberToConvert.toString();
  var inputArray = inputString.split("");

  if(this._info === "Binary"){
    var formatedInputString = "";
    
    while (inputArray.length%4 !== 0) {
      inputArray.unshift(0);
    }

    var stringLength = inputArray.length;

    for(var k = 0; k < stringLength; k++) {
      formatedInputString += inputArray[k];
      if ((k - 3)%4 === 0) {
        formatedInputString += " ";
      }
    }
    console.log(this._info + " input string: " + formatedInputString);
  
  } else {
    console.log(this._info + " input string: " + inputString);
  }

  inputArray.reverse();
  var arrLength = inputArray.length;

  for(var i = 0; i < arrLength; i++) {

    if (this._hex === true){
      switch(inputArray[i]) {
        case 'A': inputArray[i] = 10; break;
        case 'B': inputArray[i] = 11; break;
        case 'C': inputArray[i] = 12; break;
        case 'D': inputArray[i] = 13; break;
        case 'E': inputArray[i] = 14; break;
        case 'F': inputArray[i] = 15; break;
      }
    } else {}

    weightNumber = ((inputArray[i]) * Math.pow(this._basePower, exponent));
    weightArray.push(weightNumber);
    nibble += weightArray[i];
    j++;
    exponent++; 
  }

  this._convertedArray = nibble.toString().split("");
  this.decResult();
};

NumberSystems.prototype.decResult = function() {
  var decStr = "";
  var sLength = this._convertedArray.length;

  for(var l = 0; l < sLength; l++) {
    if(this._convertedArray[l] === ",") {
      this._convertedArray[l] = "";
    }
    decStr += this._convertedArray[l];
  }
  console.log("Decimal result" + ": " + decStr);
};

NumberSystems.prototype.toString = function() {
  return "[object " + this._name + "]";
};

function FromBinary(numberToConvert, hex) {
  var info = "Binary";
  this._hex = false;
  this._basePower = 2;
  NumberSystems.call(this, numberToConvert, this._hex, this._basePower, info);
  this._name = "From binary to decimal";
}

FromBinary.prototype = Object.create(NumberSystems.prototype);
FromBinary.prototype.constructor = FromBinary;

function FromOctal(numberToConvert, hex) {
  var info = "Octal";
  this._hex = false;
  this._basePower = 8;
  NumberSystems.call(this, numberToConvert, this._hex, this._basePower, info);
  this._name = "From octal to decimal";
}

FromOctal.prototype = Object.create(NumberSystems.prototype);
FromOctal.prototype.constructor = FromOctal;

function FromHexadecimal(numberToConvert, hex) {
  var info = "Hexadecimal";
  this._hex = true;
  this._basePower = 16;
  NumberSystems.call(this, numberToConvert, this._hex, this._basePower, info);
  this._name = "From hexadecimal to decimal";
}

FromHexadecimal.prototype = Object.create(NumberSystems.prototype);
FromHexadecimal.prototype.constructor = FromHexadecimal;

var binary = '1001101000110101';
var octal = '72175641';
var hexadecimal = '1A4C03F2';

var fromBinary1 = new FromBinary(binary);
var fromOctal1 = new FromOctal(octal);
var fromHexadecimal1 = new FromHexadecimal(hexadecimal);
