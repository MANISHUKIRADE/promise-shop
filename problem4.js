promise = new Promise(function(resolve,reject){
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'))
})
function onReject(error){
    console.log(error.message)
}
promise.then(function(result){
    console.log(result)
},function(err){
 onReject(err)
})
