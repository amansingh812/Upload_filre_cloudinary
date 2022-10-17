const http = require('http');
const app = require('./app');
const server = http.createServer(app);

// app.post("/home", (req,res) => {
//     console.log(req.body)
// })

server.listen(3000, console.log('app server is running'));