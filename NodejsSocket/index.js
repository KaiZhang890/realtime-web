const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const net = require('net');

var ioSocket;

const client = net.createConnection({host:'192.168.8.189', port: 10001}, () => {
  console.log('connected to server');
});

client.on('data', (data) => {
  io.emit('quotation', data.toString());
});

client.on('end', () => {
  console.log('disconnected from server');
});

client.on('error', (err) => {
  throw err;
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  ioSocket = socket;
});

http.listen(3000, () => {
  console.log('Example app listening at http://127.0.0.1:3000');
});
