var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.readFile('./index.html', function(err, data) {
		if(req.url == '/') {
			res.writeHead(200, {
				'Content-type': 'text/html'
			});
			res.end(data, 'utf-8');
		}else if(req.url == '/assets/img/server.png') {
			res.writeHead(200, {'Content-type':'images/jpeg'});
			fs.readFile('./assets/img/server.png', function(err, data){
				if(err) throw err;
				res.end(data);
			});
		}
	})
}).listen(3000, '127.0.0.1');
console.log('正在本地3000端口跑服务。');

var io = require('socket.io').listen(server);

function random(min,max){
	var range = max-min;
	var num = min+Math.round(Math.random()*range);
	return num
};

io.sockets.on('connection', function(socket) {
	setInterval(function() {
		socket.emit('server', {
			server0: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server1: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server2: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server3: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server4: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server5: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server6: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server7: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server8: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server9: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server10: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server11: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server12: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server13: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server14: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server15: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server16: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server17: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server18: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
			server19: {
				cpu: random(20,99),
				temp: random(40,70),
				storage_used: 110,
				storage_total: 500,
				net_traffic: random(400,500),
				speed: random(15,25)
			},
		});
	},5000);
});

