const express = require('express')
const app = express(),
	  bodyParser = require("body-parser"),
	  http = require('http'),
	  server = http.createServer(app),
	  { Server } = require("socket.io"),
	  io = new Server(server);
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/web-ui/dist'));

app.get('/', (req, res) => {
//   res.send('Hello World!') 
	res.sendFile('/web-ui/dist/index.html')
})

app.get('/api/users', (req, res) => {
	console.log('api/users called!!!!!!!')
	res.send('users api called');
  });

io.on('connection', (socket) => {  
	console.log('a user connected')
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})