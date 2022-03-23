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


// Youtube Soluion

// var longestCommonPrefix = functions(strs) {
//     if (str.length == 0) {
//         return "";
//     }

//     let prefix = strs[0];

//     for (let i=1; i<strs.length; i++) {
//         while(strs[1].indexOf(prefix) !=0) {
//             prefix = prefix.substring(0, prefix.length -1);
//             console.log('Prefix is currently ' + prefix)
//         }
//     }
//     return prefix
// }