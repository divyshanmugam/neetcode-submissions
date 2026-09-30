class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
        let left =0;
        let right = s.length-1;
        while(left<right) {
            if(!isAlphaNumeric(s[left])){
                left++;
                continue;
            } 
            if(!isAlphaNumeric(s[right])) {
                right--;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase())
                return false;
            left++;
            right--;
        }
        return true;
    }
    
}
function isAlphaNumeric(char) {
    return (
        char>= 'a' && char<='z' ||
        char>= 'A' && char<='Z' ||
        char>= '0' && char<='9'
    );
}
