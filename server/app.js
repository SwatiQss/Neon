const express =require('express')

const app=express();//create an express app

app.get('/',(req,res)=>{
    res.send('Hello, World!');
});//seting a basic route

//defining the port number

const PORT=3000;

//Make the server listen on the specified port
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


