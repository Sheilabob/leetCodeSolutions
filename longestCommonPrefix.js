/**
 * @param {string[]} strs
 * @return {string}
 */
 let strs = ["flower","flow","flight"]

 var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {return ""};
    if (strs.length == 1) {return strs[0]}
    let newArray = []
    let setOfArrays = strs.map(string => string.split(""))
    let filteredArray = setOfArrays
    let lengthofArray = setOfArrays.length
    
    if (setOfArrays[0].length == 0) {return ""}
    
    filteredArray = setOfArrays.filter(letter => letter[0] === setOfArrays[0][0])
  
    while (filteredArray.length === lengthofArray && filteredArray[0].length !== 0) {
      newArray.push(setOfArrays[0][0]) 
      setOfArrays = setOfArrays.map(word => word.slice(1))
      filteredArray = setOfArrays.filter(letter => letter[0] === setOfArrays[0][0])
    }
  
     console.log(newArray.join(""))
     return newArray.join("")

};

longestCommonPrefix(strs);