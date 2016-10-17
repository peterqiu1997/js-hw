/** ================================================================================
 *  Modify object2 so that when I call object2.concat() it will return the
 *  concatenation of the properties first and second
 *  ================================================================================ */

var object2 = {
  first: '',
  second: '',
  concat: function() {
  	return this.first + this.second;
  }
}

/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
module.exports = object2;

