const express = require('express')
const server = express()
const port = 5000;
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Hello Sourabh");
})

//app.use(bodyParser.urlencoded({ extended: false }))

//app.use(bodyParser.json())
// your code goes here

server.post('/addition',(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    if(isNaN(a) || isNaN(b)){
        return res.send({status:"failure",message:"Invalid data types"})
    }
    const sum = a+b;
    if(sum < -1000000 || sum>1000000){
        return res.send({status:"error",message:"Overflow"})
    }
    return res.send({status:"success",message:"The sum of two no is:",sum});
})

server.post('/substraction',(req,res)=>{
     const a = parseInt(req.body.a);
     const b = parseInt(req.body.b);
     if(isNaN(a) || isNaN(b)){
        return res.send({status:"failure",message:"Invalid data types"})
    }
    const substract = a-b;
    if(substract>1000000){
        return res.send({status:"error",message:"Overflow"})
    }
    else if(substract < -1000000 ){
        return res.send({status:"error",message:"Underflow"});
    }
    return res.send({status:"success",message:"The substraction of two no is:",substract});
});

server.post('/multiplication',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    if(isNaN(a) || isNaN(b)){
        return res.send({status:"failure",message:"Invalid data types"});
    }
    const multiplication = a*b;
    if(multiplication>1000000){
        return res.send({status:"error", message:"overflow"});
    }
    else if(multiplication<-1000000){
        return res.send({status:"error",message:"Underflow"});
    }
    return res.send({status:"success",message:"The Multiplication of two no is:",multiplication});
});

server.post('/division',(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    if(isNaN(a) || isNaN(b)){
        return res.send({status:"failure",message:"Invalid data types"});
    }
    if(b==0){
        return res.send({message:"Cannot divide by zero"})
    }
    const division = a/b;
    if(division<-1000000 || division>1000000){
        return res.send({status:"error", message:"Underflows"});
    }
    return res.send({status:"success",message:"The Multiplication of two no is:",division});
})

server.listen(port, () => console.log(`App listening on port ${port}!`))

//module.exports = app;