const express = require('express')
const bodyParser= require('body-parser');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/public', express.static('public'));
//ROUTES WILL GO HERE
var uploadRouter = require('./routes/upload');
app.use('/fileupload', uploadRouter);
 
app.listen(4000, () => console.log('Server started on port 4000'));