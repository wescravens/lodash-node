/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEach = require('./baseEach'),
    createCallback = require('../functions/createCallback'),
    isArray = require('../objects/isArray');

/**
 * Creates a function that aggregates a collection, creating an object composed
 * of keys generated from the results of running each element of the collection
 * through a callback. The given `setter` function sets the keys and values
 * of the composed object.
 *
 * @private
 * @param {Function} setter The setter function.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter) {
  return function(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg, 3);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        var value = collection[index];
        setter(result, value, callback(value, index, collection), collection);
      }
    } else {
      baseEach(collection, function(value, key, collection) {
        setter(result, value, callback(value, key, collection), collection);
      });
    }
    return result;
  };
}

module.exports = createAggregator;