function alwaysThrows(){
    throw new Error('OH NOES')
}
function iterate(value){
    return value+1;
}
Promise.resolve(1)
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(alwaysThrows)
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
})
.then(function(result){
    console.log(result)
    return iterate(result)
}).catch(function(err){
    console.log(err.message)
})