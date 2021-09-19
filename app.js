const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4file');
	res.status(418);
	res.send('I prefer coffe');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
