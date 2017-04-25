function to_roman(input) {
    // start your code here
    while(input < 3000){
        if(input >=1000){
            temp += "M";
           return to_roman(input-=1000);
        }
        else if(input >=900){
            temp += "CM";
            return to_roman(input-=900);
        }
        else if(input >=500){
            temp += "D";
            return to_roman(input-=500,"D");
        }
        else if(input >=400){
            temp += "CD";
            return to_roman(input -= 400);
        }
        else if(input >=100){
            temp += "C";
            return to_roman(input -= 100);
        }
        else if(input >=90){
            temp += "XC";
            return to_roman(input -= 90);
        }
        else if(input >=50){
            temp += "L";
            return to_roman(input -= 50);
        }
        else if(input >=40){
            temp += "XL";
            return to_roman(input -= 40);
        }
        else if(input >=10){
            temp += "X";
            return to_roman(input -= 10);
        }
        else if(input >=9){
            temp += "CM";
            return to_roman(input -= 9);
        }
        else if(input >= 5){
            temp += "V";
            return to_roman(input -= 5);
        }
        else if(input >= 4){
            temp += "IV";
            return to_roman(input -= 4);
        }
        else if(input >= 1){
            temp += "I";
            return to_roman(input -= 1);
        }
        else if(input == 0){
            input = 0;
            break;
        }
    }
    return temp;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
