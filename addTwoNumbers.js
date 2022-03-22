/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 l1=[2,4,3]
 l2=[5,6,4]
 
 
 var addTwoNumbers = function(l1, l2) {
     let reversedL1 = l1.reverse()
     let reversedL2 = l2.reverse()
     let combinedL1 = reversedL1.join("")
     let combinedL2 = reversedL2.join("")
     let numL1 = parseInt(combinedL1)
     let numL2 = parseInt(combinedL2)
     let totalNum= numL1 + numL2
     let numAsString= totalNum.toString()
     let numAsArray = numAsString.split("")
     let reversedNumArray = numAsArray.reverse()
     let newNumArray = reversedNumArray.map(str => {return Number(str)})
    return newNumArray
 }
 addTwoNumbers(l1, l2)

//  Simplified version:
//  l1=[2,4,3]
//  l2=[5,6,4]
 
 
//  var addTwoNumbers = function(l1, l2) {

//      let newNumArray = (parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""))).toString().split("").reverse().map(str => {return Number(str)})
//      console.log(newNumArray)
 
//  }
//  addTwoNumbers(l1, l2)
