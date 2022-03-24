/**
 * @param {string} s
 * @return {boolean}
 */
 s="()"

 var isValid = function(s) {
   
   let sArray = s.split("")
   
  while (sArray.length>2) {
   for (let i=0; i<sArray.length; i++) {
  
       if (sArray[i] == "(" && sArray[i+1] == ")") {
         sArray.splice(i,2)
         console.log(sArray)
       } else if (sArray[i] == "{" && sArray[i+1] == "}"){
         sArray.splice(i,2)
         console.log(sArray)
       } else if (sArray[i] == "[" && sArray[i+1] == "]") {
         sArray.splice(i,2)
         console.log(sArray)
       } else {
         console.log(sArray)
       }
     }
   }
 
 console.log(sArray.length)
   console.log(sArray.toString())
 if (sArray.toString() === "(,)" || sArray.toString() === "[,]" || sArray.toString() === "{,}" ) {
   return true
 } else {
   return false
 }
 };
 
 isValid(s)