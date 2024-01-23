const express=require('express')
const port=process.env.PORT || 8000;

const a=express()


a.use(express.json());

a.use(express.urlencoded());


a.use(express.static('public'));



a.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html');
})

a.post('/formPost',(req,res)=>{
    console.log(req.body)
})

a.listen(port,()=>{
    console.log('server started at http://localhost:${port}')
});