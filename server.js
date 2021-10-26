const http = require('http');
const host = 'Localhost';
const port = 3000;


http.createServer((req, res) => {
    res.end('<h1>Working</h1>')
}).listen(port, () => console.log(`server is running in ${host}:${port}`));
