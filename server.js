const express = require('express');
const app = express();

const mockUserData = [
    {naem:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    res.join({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(8000,funtion(){
console.log("server is running")
})