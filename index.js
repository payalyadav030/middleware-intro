//middleware - it is a function that interceps the request before going to the  main process
//  commonly denoted by - next
//request-response cycle
//   '/' it means the route url means the website url

// req: 
// res:
// next : ?

// url: https://loacahost:9090 which actually respresnts the route: '/' them
// 1. a request is sent to the server.
// 2. express accepts the request.
// 3. checks whether the route is available or not.
//    if yes: process further
//    if no : not found error
// 4. feteches all the middlewares for the request.
//    A, B, C , FINAL
//    
//   -- transfer the request to A(req, res, next)  - here next means the next middleware i.e B
//   -- transfer the request to B(req, res, next) - here middleware is C
//   -- transfer the request to C(req, res, next) - here next is FINAL
//   -- transfer the request to FINAL(req, res);



//   '/': (4 functions are there)
//       A,
//       B,
//       C,
//       FINAL


const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT =  8099;

app.use(express.json());
app.use(express.urlencoded());

// syntax for middle ware

// app.use(function(req, res, next){
//     var date = new Date();
//     console.log("received the request:",date )
//     return next();
// })
// application level middleware
// print  the time on an incoming request
app.get('/', function(req, res){
    console.log("inside the route");
    res.status(200).send("this is my homepage..");
})
app.get('/testing-middlewares', function(req,res, next){
    console.log("i m in middleware A");

    return next();
}, function(req, res, next){
    console.log("i m in middleware b");

    return next();
}, function(req, res, next){
    console.log("testing complete")
    return res.send("testing complete");
    
})

///////////////////////  req.params in express //////////////////////////////
// placeholder- route with placeholder
// app.get('/user/:username/:age/:gender', function(req, res){
//    // console.log(req.params); also
//    console.log(req.params);
// //    console.log("username:", req.param('username'));
// //    console.log("age", req.param('age'))
// //    console.log("gender", req.param('gender'))  // we can write it in a way

//     console.log("username", req.params.username);
//     console.log("age", req.params.age);
//     console.log("gender", req.params.gender);
//     res.send("  successfully retrieved users profile")
// })

    /// for optional plaeholder like if i want to work without gender the we will add a question mark
    app.get('/user/:username/:age/:gender?', function(req, res){
        console.log(req.params);
        console.log("username", req.params.username);
    console.log("age", req.params.age);
    console.log("gender", req.params.gender);
    res.send("  successfully retrieved users profile")
})

////// POSTMAN - it is a tool which connects urls/////// to connect with th APIs


app.listen(PORT, function(){
    console.log("application is started on port:", PORT);
})