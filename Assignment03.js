function cToF(celsius) 
{
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    document.writeln(message+"<br>");
}

function fToC(fahrenheit) 
{
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.writeln(message);
} 
cToF(parseInt(prompt("Enter temperature in Celsius to convert into Fahrenheit:\nfor eg. 60")));
fToC(parseInt(prompt("Enter temperature in Fahrenheit to convert into Celsius:\nfor eg. 45")));