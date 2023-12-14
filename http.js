const http = require('http');

// Create server
const server = http.createServer((req, res) =>{
    // console.log(req)
    // res.write("Welcome to our Home Page")
    // res.end()
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short History')
    }

    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back</a>
    `)
})

server.listen(5000)