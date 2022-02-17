/**
 * @param {string} s
 * @return {number}
 */


 var romanToInt = function(s) {
    const romanArray = s.split('');
    let runningTotal = 0;
    console.log(romanArray)
   
   for (let i = 1; i <= romanArray.length;) {
    switch(romanArray[0]) {
      case 'M':
        runningTotal += 1000;
        romanArray.shift();
        break;
      case 'D':
        runningTotal += 500;
        romanArray.shift();
        break;
      case 'C':
        if (romanArray[1] == 'M') {
          runningTotal += 900;
          romanArray.shift();
        } else if (romanArray[1] == 'D') {
          runningTotal += 400;
          romanArray.shift();
        } else {
          runningTotal +=100;
        }
        romanArray.shift();
        break;
      case 'L':
        runningTotal += 50;
        romanArray.shift();
        break;
      case 'X':
        if (romanArray[1] == 'C') {
          runningTotal += 90;
          romanArray.shift();
        } else if (romanArray[1] == 'L') {
          runningTotal += 40;
          romanArray.shift();
        } else {
          runningTotal +=10;
        }
        romanArray.shift();
        break;
      case 'V':
        runningTotal += 5;
        romanArray.shift();
        break;
      case'I':
        if (romanArray[1] == 'X') {
          runningTotal += 9;
          romanArray.shift();
        } else if (romanArray[1] == 'V') {
          runningTotal += 4;
          romanArray.shift();
        } else {
          runningTotal +=1;
        }
        romanArray.shift();
        break;
    }
    console.log(romanArray);
};
   
   
    console.log(runningTotal)
    return runningTotal;
};

romanToInt('MCMXCIV');