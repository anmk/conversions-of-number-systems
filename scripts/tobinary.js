/* ====================================================================================
 *  Conversions of number systems
 *  Author: Andrzej Kałowski
 *  $id: tobinary.js
 *  ===================================================================================
 *  Using in the console browser:
 *  fromHexadecimal1.toBinary()
 *  fromOctal1.toBinary()
 *  =================================================================================== */

function NumberSystems(numberToConvert, nibbleLength, info) {
  this._numberToConvert = numberToConvert;
  this._nibbleLength = nibbleLength;
  this._info = info;
  this._name = "";
  this._convertedArray = [];
}

NumberSystems.prototype.toBinary = function() {
  this._convertedArray.length = 0;
  var divisor = 2;
  var inputString = this._numberToConvert.toString();
  console.log(this._info + " input: " + inputString);
  var inputArray = inputString.split("").reverse();
  var arrLength = inputArray.length;

  for(var i = 0; i < arrLength; i++) {
    switch(inputArray[i]) {
      case 'A': inputArray[i] = 10; break;
      case 'B': inputArray[i] = 11; break;
      case 'C': inputArray[i] = 12; break;
      case 'D': inputArray[i] = 13; break;
      case 'E': inputArray[i] = 14; break;
      case 'F': inputArray[i] = 15; break;
    }
    var hexNumber = Number(inputArray[i]);

    for(var j = 0; j < this._nibbleLength; j++) {
      this._remainder = hexNumber%divisor;
      hexNumber = Math.floor(hexNumber/divisor);
      this._convertedArray.push(this._remainder);
    }
  
  }
  this._convertedArray.reverse();
  this.binResult();
};

NumberSystems.prototype.binResult = function() {
  var binaryArray = this._convertedArray;
  var binStr = "";
  var sLength = binaryArray.length;
    for(var i = 0; i < sLength; i++) {
      if (i%4 === 0) {
        binStr += " " + binaryArray[i];
      } else {
        binStr += binaryArray[i];
      }
    }
  console.log("Binary result: " + binStr);
};

NumberSystems.prototype.toString = function() {
  return "[object " + this._name + "]";
};

function FromOctal(numberToConvert) {
  var info = "Octal";
  var nibbleLength = 3;
  NumberSystems.call(this, numberToConvert, nibbleLength, info);
  this._name = "From octal to binary";
}

FromOctal.prototype = Object.create(NumberSystems.prototype);
FromOctal.prototype.constructor = FromOctal;

function FromHexadecimal(numberToConvert) {
  var info = "Hexadecimal";
  var nibbleLength = 4;
  NumberSystems.call(this, numberToConvert, nibbleLength, info);
  this._name = "From hexadecimal to binary";
}

FromHexadecimal.prototype = Object.create(NumberSystems.prototype);
FromHexadecimal.prototype.constructor = FromHexadecimal;

var octal = '72175641';
var hexadecimal = '1A4C03F2';

var fromOctal1 = new FromOctal(octal);
var fromHexadecimal1 = new FromHexadecimal(hexadecimal);
