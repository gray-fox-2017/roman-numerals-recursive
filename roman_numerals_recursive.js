function to_roman(input, str=[]) {
  let denominator=function(input) {
    if(input>=1000) return 1000;
    if(input>=500) return 500;
    if(input>=100) return 100;
    if(input>=50) return 50;
    if(input>=10) return 10;
    if(input>=5) return 5;
    return 1;
  }
  let simbol=function(input) {
    if(input>=1000) return 'M';
    if(input>=500) return 'D';
    if(input>=100) return 'C';
    if(input>=50) return 'L';
    if(input>=10) return 'X';
    if(input>=5) return 'V';
    return 'I';
  }
  let jumlahSimbol=Math.floor(input/denominator(input));
  let hitung=0;
  while(jumlahSimbol>=1) {
    if(input-denominator(input)==4||input-denominator(input)==40||input-denominator(input)==400) {
      str.push(simbol(input-denominator(input)));
      str.push(simbol(input+denominator(input)));
      jumlahSimbol=0;
      input=denominator(input)*2;
    } else {
      str.push(simbol(input));
      jumlahSimbol--;
      hitung++;
      if(hitung==4) {
        while(hitung>1) {
          str.pop();
          hitung--;
        }
        str.push(simbol(input+denominator(input)))
      }
    }
  }
  input=input%denominator(input);
  if(input==0) {
    return str.join('');
  } else {
    return to_roman(input,str);
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
