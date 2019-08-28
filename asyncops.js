function all(promise1,promise2){
    return new Promise(function(resolve,reject){
        let counter = 0;
        let data = []
        promise1.then(function(result){
            counter++
            data.push(result)
            if(counter==2){
                resolve(data)
            }
            
        })
        promise2.then(function(result){
            counter++
           // console.log(data)
            data.push(result)
            if(counter==2){
                resolve(data)
            }
            
        })
           
    })
}

all(getPromise1(),getPromise2()).then(function(result){
    console.log(result)
})
