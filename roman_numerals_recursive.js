function to_roman(input, str=[]) {
  // hitung denominator/pengurang/pembagi untuk iterasi ini
  let denominator=function(input) {
    if(input>=1000) return 1000;
    if(input>=500) return 500;
    if(input>=100) return 100;
    if(input>=50) return 50;
    if(input>=10) return 10;
    if(input>=5) return 5;
    return 1;
  }
  // cari simbol default untuk iterasi ini
  let simbol=function(input) {
    if(input>=1000) return 'M';
    if(input>=500) return 'D';
    if(input>=100) return 'C';
    if(input>=50) return 'L';
    if(input>=10) return 'X';
    if(input>=5) return 'V';
    return 'I';
  }
  // hitung jumlah simbol
  let jumlahSimbol=Math.floor(input/denominator(input));
  // variabel penghitung
  let hitung=0;
  let strCek=input-denominator(input);
  // loop selama masih ada simbol untuk diberikan
  while(jumlahSimbol>=1) {
    // pemberian simbol untuk angka 9, 19, 90, dll
    if(strCek==4 && input/denominator(input)>1.5||strCek==40 && input/denominator(input)>1.5||strCek==400 && input/denominator(input)>1.5) {
      // input/denominator>1.5 untuk mengeluarkan kondisi 14, 140, dll (kondisi ini diselesaikan pada line 42)
      str.push(simbol(input-denominator(input)));
      str.push(simbol(input+denominator(input)));
      jumlahSimbol=0;
      input=denominator(input)*2;
    // pemberian simbol default
    } else {
      str.push(simbol(input));
      jumlahSimbol--;
      hitung++;
      // untuk kondisi 4, dll
      if(hitung==4) {
        while(hitung>1) {
          str.pop();
          hitung--;
        }
        str.push(simbol(input+denominator(input)))
      }
    }
  }
  // persiapan untuk iterasi selanjutnya
  input=input%denominator(input);
  if(input==0) {
    return str.join('');
  } else {
    return to_roman(input,str);
  }
}

// for(let i=0;i<=100;i++) {
//   console.log(to_roman(i))
// }
// console.log(to_roman(90))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
