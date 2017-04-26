let simbol1=['I','X','C','M'];
let simbol5=['V','L','D'];

function to_roman(input, str=[]) {
  let string=input.toString();
  let satuan=string.length-1;

  let jumlahDigit=string[0];
  if(jumlahDigit<4) {
    while(jumlahDigit>0) {
      str.push(simbol1[satuan]);
      jumlahDigit--;
    }
  }
  if(jumlahDigit==4) {
    str.push(simbol1[satuan]);
    str.push(simbol5[satuan]);
  }
  if(jumlahDigit>4 && jumlahDigit<9) {
    str.push(simbol5[satuan]);
    while(jumlahDigit>5) {
      str.push(simbol1[satuan]);
      jumlahDigit--;
    }
  }
  if(jumlahDigit==9) {
    str.push(simbol1[satuan]);
    str.push(simbol1[satuan+1]);
  }

  string=string.slice(1,string.length);
  input=parseInt(string);

  if(string==0) {
    return str.join('');
  } else {
    return to_roman(input, str)
  }
}

for(let i=100;i<=120;i++) {
  console.log(to_roman(i))
}
console.log(to_roman(110))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
