function to_roman(num) {
  // start your code here
var romawi = [];

if (num === 0) {
  return romawi.join('');

} else if (num > 0) {
  if (num-1000 >= 0) {
    romawi.push('M');
    return to_roman(num-1000);

  } else if (num-1000 < 0) {
    if (num-900 >= 0) {
      romawi.push('CM');
      return to_roman(num-900);

    } else if (num-900 < 0) {
      if (num-500 >= 0) {
        romawi.push('D');
        return to_roman(num-500);

      } else if (num-500 < 0) {
        if (num-400>=0) {
          romawi.push('CD');
          return to_roman(num-400);

        } else if (num-400 < 0) {
          if (num-100 >= 0) {
            romawi.push('C');
            return to_roman(num-100);

          } else if (num-100 < 0) {
            if (num-90 >= 0) {
              romawi.push('XC');
              return to_roman(num-90);

            } else if (num-90 < 0) {
              if (num-50 >= 0) {
                romawi.push('L');
                return to_roman(num-50);

              } else if (num-50 < 0) {
                if (num-40 >= 0) {
                  romawi.push('XL');
                  return to_roman(num-40);

                } else if (num-40 < 0) {
                  if (num-10 >= 0) {
                    romawi.push('X');
                    return to_roman(num-10);

                  } else if (num-10 < 0) {
                    if (num-9 >= 0) {
                      romawi.push('IX');
                      return to_roman(num-9);

                    } else if (num-9 < 0) {
                      if (num-5 >= 0 ) {
                        romawi.push('V');
                        return to_roman(num-5);

                      } else if (num-5 < 0) {
                        if (num-4 >= 0) {
                          romawi.push('IV');
                          return to_roman(num-4);

                        } else if (num-4 < 0) {
                          if (num-1 >= 0) {
                            romawi.push('I');
                            return to_roman(num-1);

                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
