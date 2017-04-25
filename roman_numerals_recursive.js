function to_roman(input) {
  // start your code here
  var roman = [[1000, 'M'],
  [900, 'CM'], [500, 'D'],
  [400, 'CD'], [100, 'C'],
  [90, 'IX'], [50, 'L'],
  [40, 'XL'], [10, 'X'],
  [9, 'IX'], [5, 'V'],
  [4, 'IV'], [1, 'I']];
  // var result = '';

  if (input == 0){
    return "" ;
  }

  for (let i = 0; i < roman.length ; i++){
    if(roman[i][0] <= input){
      return roman[i][1] + to_roman(input-roman[i][0])
    }

  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
