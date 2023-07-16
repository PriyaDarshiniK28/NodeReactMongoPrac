const express = require('express'); // require is common js used as node does not support ES2015 features.
const app = express();

app.get('/', (req, res) => {
    res.send({data: 'hey'})
})

app.listen(5000);