const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
//javascript가 origin 다른 데이터 공유 못하도록 방지 
// http://www.naver.com/cafe
// http://www.naver.com/shopping
// http://localhost:3000/login
// http://localhost:3000/register
// http://localhost:4500/register
// http://localhost:4500/login


let users = [
    { 
        id:1,
        userid:"test01",
        userpwd:"test01"
    },
    { 
        id:2,
        userid:"test02",
        userpwd:"test02"
    },
    { 
        id:3,
        userid:"test03",
        userpwd:"test03"
    },
]

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next)=>{
    console.log( req.url, req.method) ;
    next();
})

app.get("/register", (req, res)=>{
    res.send(users);
})

app.post("/register", (req, res)=>{
    const { userid, userpwd} = req.body;

    const find = users.find( user => user.id === userid )
    if( find ) res.send({success :false});
    else{
        const user = { id : users[users.length-1].id + 1,  userid, userpwd }
        users.push(user);
        res.send({success: true});
    }  
})

app.post("/login", (req, res)=>{
    const { userid, userpwd} = req.body;
    const user = users.find( user=> user.userid === userid && user.userpwd === userpwd);
    console.log( user.userid )
    if( user )  res.send(user.userid);
    else res.send("user not found")
})

app.get("/*", (req, res)=>{
    console.log('file not found');
})
app.listen(4500, ()=>{
    console.log('app listening ', 4500)
})