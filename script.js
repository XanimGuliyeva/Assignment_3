function transformString(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
  }
  return output.slice(0, -1); // Remove the trailing '-'
}


console.log(transformString('ab')); // Output: 'A-Bb'
console.log(transformString('abc')); // Output: 'A-Bb-Ccc'
console.log(transformString('dkjb')); // Output: 'D-Kk-Jjj-Bbbb'
