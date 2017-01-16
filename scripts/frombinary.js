/*  =================================================================================== 
 *  Conversions of number systems
 *  Author: Andrzej Kałowski
 *  $id: frombinary.js
 *  ===================================================================================
 *  Using in the console browser:
 *  toHexadecimal1.fromBinary()
 *  toOctal1.fromBinary()
 *  =================================================================================== */

function NumberSystems(numberToConvert, hex, oct, nibbleSize) {
  this._numberToConvert = numberToConvert;
  this._hex = hex;
  this._oct = oct;
  this._nibbleSize = nibbleSize;
  this._name = "";
  this._convertedArray = [];
}

NumberSystems.prototype.fromBinary = function() {
  var nibble = 0;
  var j = 0;
  var k = 0;
  var weightNumber;
  var weightArray = [];
  var inputArray = [];
  var inputString = this._numberToConvert.toString();
  var binaryInputString = "";

  inputArray = inputString.split("");

  while (inputArray.length%4 !== 0) {
    inputArray.unshift(0);
  }

  var stringLength = inputArray.length;
  
  for(var l = 0; l < stringLength; l++) {
    binaryInputString += inputArray[l];
    if ((l - 3)%4 === 0) {
      binaryInputString += " ";
    }
  }

  console.log("Binary input: " + binaryInputString);
  var inputData = inputArray.reverse();
  var arrLength = inputData.length;

  for(var i = 0; i < arrLength; i++) {
    weightNumber = ((inputData[i]) * Math.pow(2, k));
    weightArray.push(weightNumber);
    nibble += weightArray[i];

    if (this._hex === true){
      switch(nibble) {
        case 10: nibble = 'A'; break;
        case 11: nibble = 'B'; break;
        case 12: nibble = 'C'; break;
        case 13: nibble = 'D'; break;
        case 14: nibble = 'E'; break;
        case 15: nibble = 'F'; break;
      }
    }

    j++;
    k++; 

    if ((j > this._nibbleSize)) {
      this._convertedArray.push(nibble);
      j = 0;
      k = 0;
      nibble = 0;
    }
  }

  this._convertedArray.reverse();

  if (this._hex === true) {
      NumberSystems.prototype.hexResult.call(this, this._convertedArray);
  } else if (this._oct === true) {
      NumberSystems.prototype.octResult.call(this, this._convertedArray);
  } else {}
};

NumberSystems.prototype.hexResult = function() {
  var info = "Hexadecimal";
  var hexadecimalArray = this._convertedArray;
  var hexStr = hexadecimalArray.toString().split("");
  var sLength = hexStr.length;
  this.clean.call(this, hexStr, sLength, info);
};

NumberSystems.prototype.octResult = function() {
  var info = "Octal";
  var octalArray = this._convertedArray;
  var octStr = octalArray.toString().split("");
  var sLength = octStr.length;
  this.clean.call(this, octStr, sLength, info);
};

NumberSystems.prototype.clean = function(elems, sLength, info) {
  var outcome = "";
  for(var m = 0; m < sLength; m++) {
    if(elems[m] === ",") {
      elems[m] = "";
    }
    outcome += elems[m];
  }
  console.log(info + " result" + ": " + outcome);
  this._convertedArray.length = 0;
};

NumberSystems.prototype.toString = function() {
  return "[object " + this._name + "]";
};

function ToHexadecimal(numberToConvert) {
  this._hex = true;
  this._oct = false;
  this._nibbleSize = 3;
  NumberSystems.call(this, numberToConvert, this._hex, this._oct, this._nibbleSize);
  this._name = "From binary to hexadecimal";
}

ToHexadecimal.prototype = Object.create(NumberSystems.prototype);
ToHexadecimal.prototype.constructor = ToHexadecimal;

function ToOctal(numberToConvert) {
  this._hex = false;
  this._oct = true;
  this._nibbleSize = 2;
  NumberSystems.call(this, numberToConvert, this._hex, this._oct, this._nibbleSize);
  this._name = "From binary to octal";
}

ToOctal.prototype = Object.create(NumberSystems.prototype);
ToOctal.prototype.constructor = ToOctal;

var binary = '101010011000011011';

var toOctal1 = new ToOctal(binary);
var toHexadecimal1 = new ToHexadecimal(binary);