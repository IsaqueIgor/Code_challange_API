const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);

require('./database');

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log('The application is running on localhost:' + port);
});