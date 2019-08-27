function attachTitle(value){
    
           let attcheddata = 'DR. '+value

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