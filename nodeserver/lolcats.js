//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=8081; 


//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}


var lolcats = [ "asfd",
"bob",
"sue"
]

//A sample GET request    
dispatcher.onGet("/random_lolcat", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //TODO: random num length lolcats
    res.end(lolcats[1]);
});    

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});