const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extender: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});