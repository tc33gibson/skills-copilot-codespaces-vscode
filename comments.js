// Create web server application
// Run: node comments.js
// Result: http://localhost:3000

// Include http module, 
// and create http server.
var http = require('http');
var server = http.createServer(function (req, res) {

    // New comment
    var comment = {
        "id": 1,
        "author": "Pete Hunt",
        "text": "This is one comment"
    };

    // Send the response as JSON
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comment));

});
// Listen on port 3000, IP defaults to