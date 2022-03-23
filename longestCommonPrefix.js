/**
 * @param {string[]} strs
 * @return {string}
 */
 let strs = ["flower","flow","flight"]

 var longestCommonPrefix = function(strs) {
    if (strs = []) {
        return ""
    }

     let newArray = []
     let setOfArrays = strs.map(string => string.split(""))
     let filteredArray = setOfArrays
     let lengthofArray = setOfArrays.length
     
     filteredArray = setOfArrays.filter(letter => letter[0] === setOfArrays[0][0])
   
     while (filteredArray.length === lengthofArray) {
       newArray.push(setOfArrays[0][0])
       setOfArrays = setOfArrays.map(word => word.slice(1))
       filteredArray = setOfArrays.filter(letter => letter[0] === setOfArrays[0][0])
     }
   
      console.log(newArray.join(""))
      return newArray.join("")
 
 };
 
 longestCommonPrefix(strs);