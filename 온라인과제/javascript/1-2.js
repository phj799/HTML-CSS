function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str ? true : false;
}

// 출력
// palindrome('level') => true
// palindrome('hi') => false
