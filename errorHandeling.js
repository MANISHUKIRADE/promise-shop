let invalidJSON = process.argv[2]
function parsePromised(){
 return new Promise(function(resolve,reject){
     try{
         let data = JSON.parse(invalidJSON)
         resolve(data)
     }catch(error){
         reject(error.message)
     }
 })
}
parsePromised()
.then(null,console.log)