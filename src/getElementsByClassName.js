// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  // your code here
  var result = [];
  function verify (node) {
    if (node) {
  		if (node.length) {
  			for (var i = 0; i < node.length; i++) {
  				verify(node[i]);
  			}
  		} else {
  			if (node.classList) {
  				if (node.classList.contains(className)) {
  					result.push(node);
  				}
  				verify(node.childNodes);
  			}
 	 	}
 	 }
 	}
  verify(document.body);
  return result;
};