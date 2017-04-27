let to_roman =(input,hasil=[]) => {
  // start your code here
  let romanArr = ['I','V','X','L','C','D','M']

  if(input<=3000&&input>1000){
    hasil.push(romanArr[6])
    input=input-1000;
    return to_roman(input,hasil);
  }

  else if(input<=1000&&input>500){
    if(input===1000){
      hasil.push(romanArr[6]);
      input=input-1000;
      return to_roman(input,hasil);
    }
    else if(input===900){
      hasil.push(romanArr[4]);
      hasil.push(romanArr[6]);
      input=input-900;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[5]);
      input=input-500;
      return to_roman(input,hasil);
    }
  }

else if(input<=500&&input>100){
    if(input===500){
      hasil.push(romanArr[5]);
      input=input-500;
      return to_roman(input,hasil);
    }
    else if(input>=400){
      hasil.push(romanArr[4]);
      hasil.push(romanArr[5]);
      input=input-400;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[4]);
      input=input-100;
      return to_roman(input,hasil);
    }
  }
else if(input<=100&&input>50){
    if(input===100){
      hasil.push(romanArr[4]);
      input=input-100;
      return to_roman(input,hasil);
    }
    else if(input>=90){
      hasil.push(romanArr[2]);
      hasil.push(romanArr[4]);
      input=input-90;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[3]);
      input=input-50;
      return to_roman(input,hasil);
    }
  }
else if(input<=50&&input>10){
    if(input===50){
      hasil.push(romanArr[3]);
      input=input-50;
      return to_roman(input,hasil);
    }
    else if(input>=40){
      hasil.push(romanArr[2]);
      hasil.push(romanArr[3]);
      input=input-40;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[2]);
      input=input-10;
      return to_roman(input,hasil);
    }
  }
else if(input<=10&&input>5)
  {
    if(input===10){
      hasil.push(romanArr[2]);
      input=input-10;
      return to_roman(input,hasil);
    }
    else if(input===9){
      hasil.push(romanArr[0]);
      hasil.push(romanArr[2]);
      input=input-9;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[1]);
      input=input-5;
      return to_roman(input,hasil);
    }
  }
else if(input<=5&&input>0){

    if(input===5){
      hasil.push(romanArr[1]);
      input=input-5;
      return to_roman(input,hasil);
    }
    else if(input===4){
      hasil.push(romanArr[0]);
      hasil.push(romanArr[1]);
      input=input-4;
      return to_roman(input,hasil);
    }else {
      hasil.push(romanArr[0]);
      input=input-1;
      return to_roman(input,hasil);
    }
  }else{
    return hasil.join('');
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
