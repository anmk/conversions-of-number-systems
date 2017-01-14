# Conversions of number systems

## Introduction
Scripts allow you to convert each other number systems: binary (2), octal (8), decimal (10), hexadecimal (16).

**Conversion scheme:**

`file todecimal.js`:

 conversion from | conversion to
---------------- | --------------
 binary      ->  |              
 octal       ->  | `toDecimal`  
 hexadecimal ->  |              

`file tobinary.js`:

 conversion from | conversion to
---------------- | --------------
 octal       ->  |              
 hexadecimal ->  | `toBinary`   

`file fromdecimal.js`:

 conversion from | conversion to 
---------------- | --------------
                 | -> binary     
 `fromDecimal`   | -> octal      
                 | -> hexadecimal

`file frombinary.js`:

 conversion from | conversion to 
---------------- | --------------
                 | -> octal      
 `fromBinary`    | -> hexadecimal



## Usage

To start the console browser, press F12 (for Google Chrome, Mozilla Firefox and Microsoft Edge).

### toDecimal

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

You can see how it works (press F12):
http://projects.kalowski.com/cons/todecimal.html

![todecimal](https://cloud.githubusercontent.com/assets/5839775/21956182/58089c10-da7b-11e6-837f-fad6a14916b6.jpg)

### toBinary

Using in the console browser:
```
fromHexadecimal1.toBinary()
fromOctal1.toBinary()
```

Examples used in the script:
```javascript
var octal = '72175641';
var hexadecimal = '1A4C03F2';
```
In order to convert other values, substitute them into the above variables.

You can see how it works (press F12):
http://projects.kalowski.com/cons/tobinary.html

![tobinary](https://cloud.githubusercontent.com/assets/5839775/21956545/0b3861f0-da84-11e6-9ce8-be7faacc3919.jpg)