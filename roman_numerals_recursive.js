function to_roman(input) {
  let arr_numbers = [1000, 900,500,400,100,90,50,40,10,9,5,4,1];
  let arr_romans = ["M","CM","D","CD","C","CX","L","XL","X","IX","V","IV","I"]

  // start your code here
  if (input == 0) {
    return "";
  } else {
    for(let i=0; i<arr_numbers.length;i++){
      while(input >= arr_numbers[i]){
          return arr_romans[i] + to_roman(input - arr_numbers[i])
      }
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
console.log('2519 | MDCXLVI  | ', to_roman(2519))
