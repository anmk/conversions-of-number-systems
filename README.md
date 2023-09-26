# Conversions of number systems
![GitHub repo size](https://img.shields.io/github/repo-size/anmk/conversions-of-number-systems?style=plastic)
## Introduction
Scripts allow you to convert each other number systems: binary (2), octal (8), decimal (10), hexadecimal (16).

### Conversion scheme:

 file `todecimal.js`:

 conversion from | conversion to
---------------- | --------------
 binary      ->  |  -> decimal          
 octal       ->  |  -> decimal  
 hexadecimal ->  |  -> decimal     

 file `tobinary.js`:

 conversion from | conversion to
---------------- | --------------
 octal       ->  |  -> binary              
 hexadecimal ->  |  -> binary   

 file `fromdecimal.js`:

 conversion from | conversion to 
---------------- | --------------
 decimal     ->  | -> binary     
 decimal     ->  | -> octal      
 decimal     ->  | -> hexadecimal

 file `frombinary.js`:

 conversion from | conversion to 
---------------- | --------------
 binary      ->  | -> octal      
 binary      ->  | -> hexadecimal



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

You can see how it works (press F12): :link:
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

You can see how it works (press F12): :link:
http://projects.kalowski.com/cons/tobinary.html

![tobinary](https://cloud.githubusercontent.com/assets/5839775/21956545/0b3861f0-da84-11e6-9ce8-be7faacc3919.jpg)

### fromDecimal

Using in the console browser:
```
toHexadecimal1.fromDecimal()
toOctal1.fromDecimal()
toBinary1.fromDecimal()
```

Example used in the script:
```javascript
var decimal = '823456789';
```
In order to convert a different value, substitute it for the above variable.

You can see how it works (press F12): :link:
http://projects.kalowski.com/cons/fromdecimal.html

![fromdecimal](https://cloud.githubusercontent.com/assets/5839775/21956747/c18deada-da87-11e6-94b6-6635162bcbdb.jpg)

### fromBinary

Using in the console browser:
```
toHexadecimal1.fromBinary()
toOctal1.fromBinary()
```

Example used in the script:
```javascript
var binary = '101010011000011011';
```
In order to convert a different value, substitute it for the above variable.

You can see how it works (press F12): :link:
http://projects.kalowski.com/cons/frombinary.html

![frombinary](https://cloud.githubusercontent.com/assets/5839775/21956751/ca10dd84-da87-11e6-8f63-cb930563ea2e.jpg)
