import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(`../dist/`));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get('/', function (_, res) {
  res.sendFile(path.join('../dist', '/index.html'));
});
