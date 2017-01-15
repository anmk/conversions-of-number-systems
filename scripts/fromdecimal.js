/*  ===================================================================================
 *  Conversions of number systems
 *  Author: Andrzej Kałowski
 *  $id: fromdecimal.js
 *  ===================================================================================
 *  Użycie w konsoli przeglądarki:
 *  toHexadecimal1.fromDecimal()
 *  toOctal1.fromDecimal()
 *  toBinary1.fromDecimal()
 *  =================================================================================== */

function NumberSystems(numberToConvert, divisor) {
  this._numberToConvert = numberToConvert;
  this._divisor = divisor;
  this._name = "";
  this._convertedArray = [];
}

NumberSystems.prototype.fromDecimal = function() {
  console.log("Decimal input: " + this._numberToConvert);
  var ntc = this._numberToConvert;

  while(ntc > 0) {
    this._remainder = ntc%this._divisor;
    ntc = Math.floor(ntc/this._divisor);
    
    switch(this._remainder) {
      case 10: this._remainder = 'A'; break;
      case 11: this._remainder = 'B'; break;
      case 12: this._remainder = 'C'; break;
      case 13: this._remainder = 'D'; break;
      case 14: this._remainder = 'E'; break;
      case 15: this._remainder = 'F'; break;
    }
  
    this._convertedArray.push(this._remainder);
  }

  this._convertedArray.reverse();

  if (this._divisor === 2) {
       this.binResult();
   } else if (this._divisor === 8) {
       this.octResult();
   } else if (this._divisor === 16) {
       this.hexResult();
   }
};

NumberSystems.prototype.binResult = function() {
  var info = "Binary";
  var binStr = "";

  while (this._convertedArray.length%4 !== 0) {
    this._convertedArray.unshift(0);
  }

  var binaryArray = this._convertedArray;
  var sLength = binaryArray.length;
    for(var i = 0; i < sLength; i++) {
      if (i%4 === 0) {
        binStr += " " + binaryArray[i];
      } else {
        binStr += binaryArray[i];
      }
    }
  this.clean.call(this, binStr, info, sLength);
};

NumberSystems.prototype.octResult = function() {
  var info = "Octal";
  var octStr = this._convertedArray;
  var sLength = octStr.length;
  this.clean.call(this, octStr, info, sLength);
};

NumberSystems.prototype.hexResult = function() {
  var info = "Hexadecimal";
  var hexStr = this._convertedArray;
  var sLength = hexStr.length;
  this.clean.call(this, hexStr, info, sLength);
};

NumberSystems.prototype.clean = function(elems, info, sLength) {
  var outcome = "";

  for(var m = 0; m < sLength; m++) {
    if(elems[m] === ",") {
      elems[m] = "";
    }
    outcome += elems[m];
  }

  if(info === "Binary") {
    result = elems;
  } else { 
    result =  outcome;
  }

  console.log(info + " result" + ": " + result);
  this._convertedArray.length = 0;
};

NumberSystems.prototype.toString = function() {
  return "[object " + this._name + "]";
};

function ToBinary(numberToConvert, divisor) {
  divisor = 2;
  NumberSystems.call(this, numberToConvert, divisor);
  this._name = "From decimal to binary";
}

ToBinary.prototype = Object.create(NumberSystems.prototype);
ToBinary.prototype.constructor = ToBinary;

function ToOctal(numberToConvert, divisor) {
  divisor = 8;
  NumberSystems.call(this, numberToConvert, divisor);
  this._name = "From decimal to octal";
}

ToOctal.prototype = Object.create(NumberSystems.prototype);
ToOctal.prototype.constructor = ToOctal;

function ToHexadecimal(numberToConvert, divisor) {
  divisor = 16;
  NumberSystems.call(this, numberToConvert, divisor);
  this._name = "From decimal to hexadecimal";
}

ToHexadecimal.prototype = Object.create(NumberSystems.prototype);
ToHexadecimal.prototype.constructor = ToHexadecimal;

var decimal = '823456789';

var toBinary1 = new ToBinary(decimal);
var toOctal1 = new ToOctal(decimal);
var toHexadecimal1 = new ToHexadecimal(decimal);