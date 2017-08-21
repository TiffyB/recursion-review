// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  /*
     specification: in: obj/json
            out: string (plain text representation of the inputted json)

     justification: turn our object into a string
     explanation: quotes are placed around the object and any object punctuation i.e. "[]" or "{}" is included in the string

*/

  // determine if object is an array
  if (Array.isArray(obj)) {
    //create empty array to hold elements
    var elements = [];
  //iterate thru array  
  for (var i = 0; i < obj.length; i++){
    //send each element thru the stringifyJSON function  
    var stringifiedElement = stringifyJSON(obj[i]);
    //take the result of line above, push to elements array
    elements.push(stringifiedElement);    
  }
  //take the elements, join them with ", "
  // add brackets to each end of array
  // return resulting string
  return "".concat("[", elements.join(","), "]");
  }
  
  //determine if object is an object but NOT an array and NOT null
  if(typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    //create an empty array to hold pairs
    var pairs = [];
    //iterate thru object
    for (var key in obj) {
      //send both key and value thru stringifyJSON function
      var stringifiedKey = stringifyJSON(key);
      //handle unstringifiables i.e. functions and undefined
      if(typeof obj[key] !== "function" && obj[key] !== undefined) {
        var stringifiedValue = stringifyJSON(obj[key]);
        //join key and value pairs with a ":"
        var pair = "".concat(stringifiedKey, ":", stringifiedValue);
        //push to pairs array
        pairs.push(pair);
      } 
    }
    //join all pairs together with a "," and add brackets to each end
    return "".concat("{", pairs.join(","), "}");
  }

  //determine if string
  if (typeof obj === "string") {
    //stringify string by adding quotes
    return "".concat("\"", obj, "\"");
  }
  return "".concat(obj);
  
};
