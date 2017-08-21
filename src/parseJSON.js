// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  



  //for example, may receive "[]", which is an array
  //need to check if first letter is === "["
    //if yes, create an elements array
    //remove last bracket
    //if length of string is greater than 2
      //check if "," characters are included
        //if yes, then split by a comma
        //iterate over split elements and push to elements array


  //how to handle primatives
    //how do we handle strings??? 
    //note: "\"blah\""
    //if \" is found
      //(json is then a string)
      //remove first \"
      //find the end pair \" and remove
      //return resulting string

  //how to handle numbers
    //check if first character is a number by....isNaN(Number(str)) <- will equal true for non numbers OR check if "-" is the first char
      //turn string into a number using Number();

  //how to handle booleans
    //if string is equal to "true" or "false"
      // if string === "true"
        //return true
      //else return false;

  //
};
