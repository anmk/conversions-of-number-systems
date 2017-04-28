## Extended fromBinary.js

This script expands capabilities fromBinary.js file. Additional functionality is toDecimal. This extension duplicates possibilities todecimal.js.

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
  decimal ->     | -> binary     
  decimal ->     | -> octal      
  decimal ->     | -> hexadecimal

 file `frombinary.js`:

 conversion from | conversion to 
---------------- | --------------
  binary ->      | -> octal      
  binary ->      | -> hexadecimal
  binary ->      | -> decimal :warning: 
  
The above line doubles binary -> toDecimal, as in the `todecimal.js` file.

## Usage

To start the console browser, press F12 (for Google Chrome, Mozilla Firefox and Microsoft Edge).

### extended-fromBinary

Using in the console browser:
```
toHexadecimal1.fromBinary()
toDecimal1.fromBinary()
toOctal1.fromBinary()
```

Example used in the script:
```javascript
var binary = '101010011000011011';
```
In order to convert a different value, substitute it for the above variable.

You can see how it works (press F12): :link:
http://projects.kalowski.com/cons/extended/extended-frombinary.html

![extended-frombinary](https://cloud.githubusercontent.com/assets/5839775/22031660/9cc2721e-dce1-11e6-9c7e-9d02aaf19f8d.jpg)
