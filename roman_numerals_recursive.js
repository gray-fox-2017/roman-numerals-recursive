function to_roman(num) {
  var romanCodes = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // satuan
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // puluhan
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // ratusan
    ['', 'M', 'MM', 'MMM'] // ribuan
  ]
  if (!num){
    return '';
  } else {
    return romanCodes[num.toString().length-1][parseInt(num.toString()[0])] +
      to_roman(parseInt(num.toString().split('').splice(1).join('')));
  }
}
console.log(to_roman(476));

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
