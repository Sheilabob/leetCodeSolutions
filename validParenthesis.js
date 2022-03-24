/**
 * @param {string} s
 * @return {boolean}
 */
 s="()"

 var isValid = function(s) {
    console.log(s[0])
   for (let i=0; i<s.length; i++) {
     if (s[i] == "(") {
       console.log((s.split("")).filter(char => char === ")"))
       
     }
   }
};

isValid(s)