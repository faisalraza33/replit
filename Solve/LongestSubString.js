/*
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

string = "abcabcbb"
console.log(findSubString(string)); //Output: 3 

string = "bbbbbb"
console.log(findSubString(string)); //Output: 1

string = "pwwkew"
console.log(findSubString(string)); //Output: 3 

string = " "
console.log(findSubString(string)); //Output: 1


string = "dvdf"
console.log(findSubString(string)); //Output: 3


function findSubString(s) {
    const stringLength = s.length;
    let charMap = new Set();
    let toReturn = 0;
    left = 0;
    right = 0;
    while (left < stringLength && right < stringLength) {
        if (charMap.has(s.charCodeAt(right))) {
            charMap.delete(s.charCodeAt(left));
            left++;
        } else {
            charMap.add(s.charCodeAt(right));
            right++
            if (right - left > toReturn) {
                toReturn = right - left
            }
        }
    }
    return toReturn
}