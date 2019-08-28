function attachTitle(value){
    
           let attcheddata = 'DR. '+value
           return attcheddata

}
function nameVAlue(value){
    return new Promise(function(fullfill,reject){
        fullfill(value)
    })
}
function printPromise(result){
 console.log(result)
}
nameVAlue("MANHATTAN")
.then(attachTitle)
.then(printPromise)