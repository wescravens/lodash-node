/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern modularize exports="node" -o ./modern/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var moe = { 'name': 'moe' };
 * moe === _.identity(moe);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;
