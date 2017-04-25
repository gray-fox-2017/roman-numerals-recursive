function to_roman(input) {
  // start your code here
  let result = "";
  // let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  if (input > 0){
    if (input >= 1000){
      result = result + "M" + to_roman(input-1000, result);
      debugger
    } else if (input >= 900 && input < 1000){
      result = result + "CM" + to_roman(input-900, result);
    } else if (input >= 500 && input < 900 && input < 1000){
      result = result + "D" + to_roman(input-500,result);
    } else if (input >= 400 && input < 500 && input < 900 && input < 1000){
      result = result + "CD" + to_roman(input-4000,result);
    } else if (input >= 100 && input < 400 && input < 500 && input < 900 && input < 1000){
      result = result + "C" + to_roman(input-100,result);
    } else if (input >= 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "XC" + to_roman(input-90,result);
    } else if (input >= 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "L" + to_roman(input-50,result);
    } else if (input >= 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "XL" + to_roman(input-40,result);
    } else if (input >= 10 && input < 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 && input < 900 && input < 1000){
      debugger
      result = result + "X" + to_roman(input-10,result);
    }else if (input >= 9&& input < 10 && input < 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "IX" + to_roman(input-9,result);
    } else if (input >= 5 && input < 10 && input < 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "V" + to_roman(input-5,result);
    } else if (input >= 4 && input < 5 && input < 10 && input < 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "IV" + to_roman(input-4,result);
    } else if (input >= 1 && input < 4 && input < 5 && input < 10 && input < 40 && input < 50 && input < 90 && input < 100 && input < 400 && input < 500 &&    input < 900 && input < 1000){
      result = result + "I"+ to_roman(input-1,result);
    }
  } else if (input == 0){
    return result;
  }
  return result;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
