function longestSubstring(s) {
    // Implementation of longestSubstring function
    let start = 0, maxLength = 0;
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            start = Math.max(map.get(s[i]), start);
        }
        maxLength = Math.max(maxLength, i - start + 1);
        map.set(s[i], i + 1);
    }
    return maxLength;
}

module.exports = { longestSubstring };


