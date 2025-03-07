const express = require('express')
const app = express()
const PORT = 3001
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./public/db.json', 'utf-8'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/moviesTv', (req, res) => {
    res.send(data.moviesTv);
})
app.get('/moviesTv/:id', (req, res) => {
    res.send(data.moviesTv[req.params.id]);
})
app.get('/heroMovies', (req, res) => {
    res.send(data.heroMovies);
})

// Listen to port
app.listen(PORT, () => {
 console.log(`JSON Server is running at port:${PORT}`);
});

module.exports = app