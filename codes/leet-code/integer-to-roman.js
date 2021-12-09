/* Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */


/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let final = '';
    while(num !== 0) {
       switch(true) {
        case (num >= 1000): {
            final += 'M';
            num = num - 1000;
            break;
        }
        case (num >= 900): {
          final += 'CM';
          num -= 900;
          break;
        }
        case (num >= 500): {
            final += 'D';
            num = num - 500;
            break;
        }
        case (num >= 400): {
          final += 'CD';
          num -= 400;
          break;
        }
        case (num >= 100): {
            final += 'C';
            num = num - 100;
            break;
        }
        case (num >= 90): {
          final += 'XC';
          num -= 90;
          break;
        }
        case (num >= 50): {
            final += 'L';
            num = num - 50;
            break;
        }
        case (num >= 40): {
          final += 'XL';
          num -= 40;
          break;
        }
        case (num >= 10): {
            final += 'X';
            num = num - 10;
            break;
        }
        case (num >= 9): {
          final += 'IX';
          num -= 9;
          break;
        }
        case (num >= 5): {
            final += 'V';
            num = num - 5
            break;
        }
        case (num >= 4): {
          final += 'IV';
          num -= 4;
          break;
        }
        default: 
            final += 'I';
            num = num - 1;
      
    }   
    }
    return final;
};