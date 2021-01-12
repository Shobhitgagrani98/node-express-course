const express = require('express');
const app = express();

const mockUserData = [
    {naem:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    console.log(req.params.id)
    res.join({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})

app.listen(8000,funtion(){console.log('server is running')
})