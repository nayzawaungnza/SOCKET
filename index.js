let express = require('express');
let socket = require('socket.io');
// app setup
let app = express();
//server setup
let server=app.listen(4000,()=>{
    console.log("project is running on localhost:4000");
});
//route setup
app.get('/',(respect,request)=>{
    request.sendFile(__dirname+'/public/index.html')
});

//socket setup
let io = socket(sever,{})
io.on('connection',(socket)=>{

})