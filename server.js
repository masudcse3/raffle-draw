require('dotenv').config();
const http = require('http');
const app = require('./app/app');

const server = http.createServer(app);

const PORT = process.env.PORT || 8888;
server.listen(PORT, ()=>{
    console.log('Server starts and listen on PORT://', PORT);
})