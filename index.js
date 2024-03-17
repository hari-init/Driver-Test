const express = require('express');
const path = require('path');
const routes = require('./src/routes/index');
require('./src/db');
const PORT = 3000;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
