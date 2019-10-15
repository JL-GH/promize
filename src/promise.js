const basicPromise = new Promise((resolve, reject) => {
  resolve('basicPromise')
})
const funcPromise = () => {
  let prom = new Promise((resolve, reject) => {
    resolve('funcPromise')
  })
  return prom
};
const chainedPromise = prom => {

};
const rejectedPromise = () => null;

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
