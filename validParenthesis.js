/**
 * @param {string} s
 * @return {boolean}
 */
 s="()[]{}"

 var isValid = function(s) {
   
   let sArray = s.split("")
   
      for (let j=0;j<sArray.length;) {
        if (sArray[j] == "(" && sArray[j+1] == ")") {
            sArray.splice(j,2)
            j=0
        } else if (sArray[j] == "{" && sArray[j+1] == "}"){
            sArray.splice(j,2)
            j=0
        } else if (sArray[j] == "[" && sArray[j+1] == "]") {
            sArray.splice(j,2)
            j=0
        } else {
          j++
        }
      }
   
 
   
 if (sArray.length === 0 ) {
   return true
 } else {
   return false
 }
 };
 
 isValid(s)