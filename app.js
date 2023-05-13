const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const nodePort = 4040;
const app = express();
const moongoseHandler = require('./util/moongose-handler');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', adminRoutes);
app.use(errorController.get404);

moongoseHandler.connect();

function startServer() {
    app.listen(nodePort, function () {
      console.log('Express server listening on ', nodePort);
    });
  }
setImmediate(startServer);
