string = "babad"
console.log(longestPalindrome(string)); // Output: "bab" // aba

string = "cbbd"
console.log(longestPalindrome(string)); // Output: "bb"

string = "caba"
console.log(longestPalindrome(string)); // Output: "bb"

string = "abacdfgdcaba"
console.log(longestPalindrome(string)); // Output: "bb"

function longestPalindrome(string) {
    // is the word that can be read in reverse
    // loop throuhg the string and expand from its center
    let toReturn = "";
    for (let i = 0; i < string.length; i++) {
        const oddString = expandFromCenter(i, i);
        if (oddString.length > toReturn.length) {
            toReturn = oddString;
        }

        const evenString = expandFromCenter(i, i + 1)
        if (evenString.length > toReturn.length) {
            toReturn = evenString;
        }
    }
    return toReturn;

    function expandFromCenter(left, right) {
        while (left > 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        return string.slice(left + 1, right);
    }
};