
let httpreq= require('q-io/http')
httpreq.read('http://localhost:1337/').then(function(result){
    console.log(JSON.parse(result))
})
.catch(console.log)