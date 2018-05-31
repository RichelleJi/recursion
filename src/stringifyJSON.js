// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string')
    return '"' + obj + '"';

  if(typeof(obj) === undefined || typeof(obj)== "symbol" || typeof(obj) == "function" )
      return undefined; 
  
  if(typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean')
      return '' + obj;

  if (Array.isArray(obj)) {
    for(var i = 0; i < obj.length; i++) {
      obj[i] = stringifyJSON(obj[i]);
    }
    return '[' + obj + ']';
  }

  if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var str = '';
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key === 'functions' || key === undefined) {
        return '{}';
      } else {
        if (i === keys.length - 1) {
          str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        } else {
          str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
    }
    return '{' + str + '}';
  }
};
