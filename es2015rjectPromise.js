require('es6-promise')


let promise = new Promise(function(fullfill,reject){
   setTimeout(function(){
    reject(new Error('REJECTED!'))
   },300) 
  
})

function onReject(error){
    console.log(error.message)
}
function onfullFilled (result){
    console.log('success')
}
promise.then(function(value){
  console.log('value')
},function(error){
  onReject(error)
})