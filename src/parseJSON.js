// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === '\"\"') {
    //return '\"\"';
    //console.log('i got here');
    return "";
  }
  //for example, may receive "[]", which is an array
  //need to check if first letter is === "["
  if (json[0] === "[") {
    //if yes, create an elements array
    var elements = [];
    //remove last bracket
    
    //if length of string is greater than 2
    if (json.length > 2) {
      //check if "," characters are included
      if (json.includes(",")) {//may cause a problem if there's a comma within a string DO I NEED A SPACE??
        //if yes, then split by a comma
        var separator = json.includes(", ") ? ", " : ",";
        //console.log(separator);
        //what if i ignore whitespace instead?
        var splitElements = json.slice(1, json.length - 1).split(separator); //need to be able to handle with a space and without (assume one consistent format per test?)
        //iterate over split elements
        splitElements.forEach(function(element) {
          //call parseJSON function on each element
          //push result to elements
          elements.push(parseJSON(element));
        });
      }
    }
    return elements;
  }

  //if first character is "{"
  if (json[0] === "{") {
    var obj = {};
    if (json.length > 2) {
      var splitPairs = json.slice(1, json.length - 1).split(", ");
      splitPairs = splitPairs.map(function(pair) {
        return pair.split(": ");
      });
      splitPairs.forEach(function(pair){
        obj[parseJSON(pair[0])] = parseJSON(pair[1]);
        //console.log(typeof pair[1]);

        //console.log(pair[1] === '""');
      });
    }
    return obj;
  }
    //if yes, create a empty object {} emptyObj
    //split string by commas and place in splitPairs array
    //split each split element by colons and place in a pair array
    
      //call parseJSON on both the key and value
      //

  //how to handle primatives
    //how do we handle strings??? 
    //note: "\"blah\""
    //if \" is found
  //if (json[0] === '"') {//note may cause problems
  
  //if (json[0] === '"'){
  if (json.slice(0, 1) === '\"' && json !== '""') {
      //(json is then a string)
    //remove first \"
    //find the end pair \" and remove
    var string = "";
    if (json.length > 2) {
      string = string + json.slice(1, json.length - 1);
    }
    
    return string;
  }
  //how to handle numbers
  //check if first character is a number by....isNaN(Number(str)) <- will equal true for non numbers OR check if "-" is the first char
  if (!isNaN(Number(json))) {
    //turn string into a number using Number();
    return Number(json);
  }
      

  //how to handle booleans
    //if string is equal to "true" or "false"
  if (json === "true" || json === "false") {
    // if string === "true"
    if (json === "true") {
      return true;
    }
    return false;
  }
      
  if (json === "null") {
    return null;
  }

  

};

//debug(parseJSON('\"\"'));
//debug('\"\"')