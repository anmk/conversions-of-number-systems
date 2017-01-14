# Conversions of number systems

## Introduction
Scripts allow you to convert each other number systems: binary (2), octal (8), decimal (10), hexadecimal (16).

Conversion scheme:

file todecimal.js:

 conversion from | conversion to
---------------- | --------------
 binary      ->  |              
 octal       ->  | `toDecimal`  
 hexadecimal ->  |              

file tobinary.js:

 conversion from | conversion to
---------------- | --------------
 octal       ->  |              
 hexadecimal ->  | `toBinary`   

file fromdecimal.js:

 conversion from | conversion to 
---------------- | --------------
                 | -> binary     
 `fromDecimal`   | -> octal      
                 | -> hexadecimal

file frombinary.js:

 conversion from | conversion to 
---------------- | --------------
                 | -> octal      
 `fromBinary`    | -> hexadecimal
 
---

## Usage
To start the console browser, press F12 (for Google Chrome, Mozilla Firefox and Microsoft Edge).
---


*`Number systems - toDecimal`*
Using in the console browser:
```
fromHexadecimal1.toDecimal()
fromOctal1.toDecimal()
fromBinary1.toDecimal()
```

Examples used in the script:
```javascript
var binary = '1001101000110101';
var octal = '72175641';
var hexadecimal = '1A4C03F2';
```
In order to convert other values, substitute them into the above variables.
---