const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public_html'));

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(3000, function () {
  console.log('... listening on port 3000!')
});

process.on('SIGINT', function() {
    process.exit();
});
