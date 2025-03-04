const syncCallbacker = (arg1, arg2) => {
  if (typeof arg1 !== 'function' || typeof arg2 !== 'function') {
    throw ''
  }
  let result1 = arg1()
  return arg2(result1)
};

const asyncCallbacker = (arg1, arg2) => {
  if (typeof arg1 !== 'function' || typeof arg2 !== 'function') {
    throw ''
  }
  let data = ''

  let done = (data) => {
    arg2(data, done)
  }

  arg1(data, done)
}

module.exports = { syncCallbacker, asyncCallbacker };

