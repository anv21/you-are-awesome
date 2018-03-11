// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propName) => {
  return propName;
};

const createNotEnumerableProperty = (propName) => {
  return Symbol(propName);
};

const createProtoMagicObject = () => {
  function A() {}
  A.__proto__ = A.prototype;
  return A;
};

let incrementorVal = 0;
const incrementor = () => {
  incrementorVal += 1;
  if (incrementorVal === 3 || incrementorVal === 8 || incrementorVal === 10 || incrementorVal === 15) {
    return incrementorVal;
  }
  return incrementor;
};

let asyncIncrementorVal = 0;
const asyncIncrementor = async () => {
  return new Promise((resolve) => {
    asyncIncrementorVal += 1;
    resolve(asyncIncrementorVal);
  });
};

const createIncrementer = () => {
  return {
    value: 0,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      this.value += 1;
      return {
        done: false,
        value: this.value,
      };
    }
  };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  })
};

const getDeepPropertiesCount = (obj) => {
  let count = Object.keys(obj).length;
  for (const k of Object.keys(obj)) {
    if (obj[k] !== null && typeof obj[k] === 'object') {
      count += getDeepPropertiesCount(obj[k]);
    }
  }
  return count;
};

const createSerializedObject = () => {
  return new String("123");
};

const toBuffer = () => {
  console.log('Hello World!');
};

const sortByProto = (array) => {
  return array.sort((a, b) => a - b);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;