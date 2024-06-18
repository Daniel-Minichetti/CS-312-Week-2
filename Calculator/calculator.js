const express = require("express");

const app = express()

// home directory that displays basic message
app.get('/',(req, res) => {
    res.send('Hello World!')
});

// server will be hosted on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});

