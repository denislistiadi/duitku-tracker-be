/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const pick = <T extends object>(object: T, keys: (keyof T)[]): Partial<T> => {
  return keys.reduce<Partial<T>>((obj, key) => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export default pick;
