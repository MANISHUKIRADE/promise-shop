

first().then(function(result){
    return second(result)
})
.then(function(result){
    return  Promise.resolve(result)
})

.then(console.log)
