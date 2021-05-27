function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    var result = Math.abs(age_dt.getUTCFullYear() - 1970);
    return result;
}
var dob = prompt("Enter your Dob:(for eg.01/03/1997)");
dob = dob.split("/");
let age = calculate_age(new Date(dob));
if (age >= 18 && age <= 44)
{
    window.open(
             "https://selfregistration.cowin.gov.in", "_blank");
}
else
{
    document.write("Your age is "+calculate_age(new Date(dob)));
}



