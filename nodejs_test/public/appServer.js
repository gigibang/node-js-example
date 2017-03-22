var connect = require('connect');
var http = require('http');
var app = connect();

// function doFirst(request,response,next){
//     sonsole.log("Bacon");
//     next();
// }
// function doSecond(request,response,next){
//     sonsole.log("Second Bacon");
//     next();
// }
// app.use(doFirst);
// app.use(doSecond);

function profile(request, response) {
    console.log('User requested profile');
}
function forum(request, response) {
    console.log('Users forum');
}

app.use('/profile', profile)
app.use('/forum', forum);
http.createServer(app).listen(8887);
console.log("Server is running!")