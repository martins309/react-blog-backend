'use strict';

const http = require('http'),
hostname = '127.0.0.1',
port = 3001;

const cors = require('cors')

const express = require('express')

const app = express();

app.use(cors());

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index'),
    favoritesController = require('./routes/favorites');

    app.use('/', rootController);
    app.use('/favorites', favoritesController );
