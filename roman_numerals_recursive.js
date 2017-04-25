function to_roman(input,hasil=[]) {
  var angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

      if(input < 0){
        return hasil
      }

      if (input >= 1 && input < 4) {
        hasil.push("I")
        return to_roman(input - 1,hasil);
      }

      if (input >= 4 && input < 5) {
        hasil.push("IV")
        return to_roman(input - 4,hasil);
      }

      if (input >= 5 && input < 9) {
        hasil.push("V")
        return to_roman(input - 5,hasil);
      }

      if (input >= 9 && input < 10) {
        hasil.push("IX")
        return to_roman(input - 9,hasil);
      }


      if (input >= 10 && input < 40) {
        hasil.push("X")
        return to_roman(input - 10,hasil);
      }

      if (input >= 40 && input < 50) {
        hasil.push("XL")
        return to_roman(input - 40,hasil);
      }

      if (input >= 50 && input < 90) {
        hasil.push("L")
        return to_roman(input - 50,hasil);
      }

      if (input >= 90 && input < 100) {
        hasil.push("XC")
        return to_roman(input - 90,hasil);
      }

      if (input >= 100 && input < 400) {
        hasil.push("C")
        return to_roman(input - 100,hasil);
      }

      if (input >= 400 && input < 500) {
        hasil.push("CD")
        return to_roman(input - 400,hasil);
      }

      if (input >= 500 && input < 900) {
        hasil.push("D")
        return to_roman(input - 500,hasil);
      }

      if (input >= 900 && input < 1000) {
        hasil.push("CM")
        return to_roman(input - 900,hasil);
      }

      if (input >= 1000 && input < 10000) {
        hasil.push("M")
        return to_roman(input  - 1000,hasil)
      }

return hasil.join("")
//  return to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('2646  | MMDCXLVI  | ', to_roman(2646))
