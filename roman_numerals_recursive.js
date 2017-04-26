function to_roman (num) {
  //start your code here
  let integer_array = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let roman_array = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let temp = '';
  if(num>3000){
    return 'angka di atas batas';
  } else if (num<0){
    return 'angka di bawah batas';
  }else if (num === 0){
    return '';
  } else {
    for (let i=0;i<integer_array.length;i++){
      if(num>=integer_array[i]){
        return roman_array[i] + to_roman(num - integer_array[i])
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
console.log('1747  | MDCCXLVII| ', to_roman(1747))
