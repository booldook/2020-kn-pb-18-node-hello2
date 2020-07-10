const http = require('http');
const express = require('express');
const app = express();

const hddp = require('./modules/hddp');
hddp.createServer((req, res) => {
	console.log(`${req.name} 적어주세요.`);
	console.log(`${res.name} 적어주세요.`);
});


