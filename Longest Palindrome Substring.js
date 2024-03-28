var longestPalindrome = function(s) {
    if(s.length === 0) return "";

    let longestPalindromeStart = 0;
    let longestPalindromeLength = 1;

    function expandAroundCenter(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            const currentPalindromeLength = right - left + 1;
            if(currentPalindromeLength > longestPalindromeLength){
                longestPalindromeStart = left;
                longestPalindromeLength = currentPalindromeLength;
            }
            left--;
            right++;
        } 
    }

    for(let i = 0; i < s.length; i++){
        expandAroundCenter(i, i);
        expandAroundCenter(i,i+1);
    }
    return s.substring(longestPalindromeStart, longestPalindromeStart + longestPalindromeLength);
};

//Example usage:
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));