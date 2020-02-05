const express = require('express')
const app = express()
const port = 7777

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getInfo', (req, res) => {
    res.json({
        name: "Dheeraj Kumar Rao",
        time: new Date(),
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))