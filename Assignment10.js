// Function to check the Vowel
function countVowels(str) {
    debugger;
    let counter = 0;
    const checker = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < checker.length; i++) {
        // using built in toLowerCase() function
        for(let char of str.toLowerCase()) {
            if (checker.includes(char)) {
                counter++;
                if (checker[i] == char) {
                    document.write(char + ", " +
                    "count = " + counter + "</br>");
                }
                //  document.write(char + " : " + counter + "<br>");
            }
        }
        return counter;
    }
}
var str = "Hey This is Skillsanta JS Training";

// Total numbers of Vowel
//document.write(countVowels(str));