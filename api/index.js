const express = require('express')
const app = express()
const PORT = 3001
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/moviesTv', (req, res) => {
    res.send(data.moviesTv);
})
app.get('/api/moviesTv/:id', (req, res) => {
    res.send(data.moviesTv.find((ele)=>ele.id===parseInt(req.params.id)));
})
app.get('/api/heroMovies', (req, res) => {
    res.send(data.heroMovies);
})

// Listen to port
app.listen(PORT, () => {
 console.log(`JSON Server is running at port:${PORT}`);
});

module.exports = app