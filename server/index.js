const express = require('express'); // require is common js used as node does not support ES2015 features.
const mongoose = require('mongoose');
const keys = require('./configs/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);