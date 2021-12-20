const express = require('express')
const app = express(),
	  bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/web-ui/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
	console.log('api/users called!!!!!!!')
	res.send('users api called');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})