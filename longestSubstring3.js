s = "abcabcbb"

 var lengthOfLongestSubstring = function(s) {
    // #first break it into an array
    stringArray = s.split("")
   console.log(stringArray)
   //  #next iterate through to find where i != i+1, maybe slice it everywhere that i == i+1
   for (let i=1; i<stringArray.length;i++) {
     if (stringArray[0] === stringArray[i]) {
       substring1 = stringArray.splice(0,i)
       console.log(substring1)
     }
   }
   // #after slicing it, check to make sure that everything within is unique and re-slice if needed
   // #check if it is the longest slice yet
   // #store the slice in a variable
   
};

lengthOfLongestSubstring(s)