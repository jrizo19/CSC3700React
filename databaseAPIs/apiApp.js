const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes')

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(dataRoutes.routes);

let port = 1000;
const server = http.createServer(app);
server.listen(port);
console.log(`Listening on http://localhost:${port}`);