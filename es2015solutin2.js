require('es6-promise')
let promise = new Promise(function(fullfill,reject){
 setTimeout(()=> {fullfill('FULFILLED!')},300)
})

promise.then(function(result){
    console.log(result)
})