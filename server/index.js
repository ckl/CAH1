const express = require('express')
const app = express(),
	  bodyParser = require("body-parser"),
	  const http = require('http'),
	  const server = http.createServer(app)
	  const { Server } = require("socket.io")
	  const io = new Server(server);
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

io.on('connection', (socket) => {  console.log('a user connected');});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})