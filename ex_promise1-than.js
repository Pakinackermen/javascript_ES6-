
fs = require('fs');
var promise = new Promise((test) => { 
    fs.writeFile('promiseTEST.txt', 'Hello world Im\' Pakin Ackermen', err => {
        if (err)
            console.log(err)
    })
    console.log("Success Write file")
    test(">>>>>>> Send value to test") 
})

promise.then(function (test) {
    console.log(test) 

    fs.readFile('promiseTEST.txt', 'utf-8', err =>{
        if (err)
            console.log(err)
    }  )
     return new Promise(test2 => {
         console.log("Success Read file")
         test2(">>>>>>> Send value to test2")
     });
    })
    .then(function (test2) {
        console.log(test2)
        return new Promise(test3 => {
            test3( t = {
                id:1001,
                name:"Pakin",
                email:"testmail@gmail.com"
             })
        })
    })
    .then( function(dupicate_test3)  {
        let { id, name, email } = dupicate_test3
        console.log(id)
        console.log(name)
        console.log(email)
     })

