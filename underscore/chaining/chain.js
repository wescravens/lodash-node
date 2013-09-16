/**
 * Lo-Dash 2.0.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore modularize exports="node" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var lodashWrapper = require('../internals/lodashWrapper');

/**
 * Creates a `lodash` object that wraps the given value.
 *
 * @static
 * @memberOf _
 * @category Chaining
 * @param {*} value The value to wrap.
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 },
 *   { 'name': 'curly', 'age': 60 }
 * ];
 *
 * var youngest = _.chain(stooges)
 *     .sortBy(function(stooge) { return stooge.age; })
 *     .map(function(stooge) { return stooge.name + ' is ' + stooge.age; })
 *     .first();
 * // => 'moe is 40'
 */
function chain(value) {
  value = new lodashWrapper(value);
  value.__chain__ = true;
  return value;
}

module.exports = chain;
