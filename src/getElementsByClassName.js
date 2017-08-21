  // If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  /*
    initial thoughts:
      create empty array to collect nodes with class name to output
      check if node is defined
      if node is not defined
        set node to document.body
      check if passed className is included in list of class names of current node
      if yes, then add node to output array
      iterate thru child nodes of main node (each of which will be a tree)
//  1.      assign to result variable the return value(array) of getElementsByClassName on child nodes
//  2.      add result to output array   OR
       use concatenation for return value of GECN(getElementsByClassName) fn on child nodes to output array
      return array
  */
  
  
};
