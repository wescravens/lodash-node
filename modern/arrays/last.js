/**
 * Lo-Dash 2.2.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern modularize exports="node" -o ./modern/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createCallback = require('../functions/createCallback'),
    slice = require('../internals/slice');

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMax = Math.max;

/**
 * Gets the last element or last `n` elements of an array. If a callback is
 * provided elements at the end of the array are returned as long as the
 * callback returns truey. The callback is bound to `thisArg` and invoked
 * with three arguments; (value, index, array).
 *
 * If a property name is provided for `callback` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is provided for `callback` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Object|number|string} [callback] The function called
 *  per element or the number of elements to return. If a property name or
 *  object is provided it will be used to create a "_.pluck" or "_.where"
 *  style callback, respectively.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {*} Returns the last element(s) of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 *
 * _.last([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.last([1, 2, 3], function(num) {
 *   return num > 1;
 * });
 * // => [2, 3]
 *
 * var food = [
 *   { 'name': 'beet',   'organic': false },
 *   { 'name': 'carrot', 'organic': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.last(food, 'organic');
 * // => [{ 'name': 'carrot', 'organic': true }]
 *
 * var food = [
 *   { 'name': 'banana', 'type': 'fruit' },
 *   { 'name': 'beet',   'type': 'vegetable' },
 *   { 'name': 'carrot', 'type': 'vegetable' }
 * ];
 *
 * // using "_.where" callback shorthand
 * _.last(food, { 'type': 'vegetable' });
 * // => [{ 'name': 'beet', 'type': 'vegetable' }, { 'name': 'carrot', 'type': 'vegetable' }]
 */
function last(array, callback, thisArg) {
  var n = 0,
      length = array ? array.length : 0;

  if (typeof callback != 'number' && callback != null) {
    var index = length;
    callback = createCallback(callback, thisArg, 3);
    while (index-- && callback(array[index], index, array)) {
      n++;
    }
  } else {
    n = callback;
    if (n == null || thisArg) {
      return array ? array[length - 1] : undefined;
    }
  }
  return slice(array, nativeMax(0, length - n));
}

module.exports = last;
