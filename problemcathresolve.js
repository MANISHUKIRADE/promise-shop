require('es6-promise')
let promise1 =  Promise.resolve('SECRET VALUE RESOLVE')
let promise2 =  Promise.reject(new Error('SECRET VALUE REJRCT'))
promise1.then(console.log)
promise2
.then(console.log)
.catch(console.log)
         