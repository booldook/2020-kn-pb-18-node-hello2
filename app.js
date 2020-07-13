const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');

const connect = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "000000",
	database: "test1"
});

app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname, './public')));

app.post('/user/save', (req, res) => {
	const { userid, userpw, username, email } = req.body;
	const sql = "INSERT INTO users SET userid=?, userpw=?, username=?, email=?";
	const val = [userid, userpw, username, email];
	connect.query(sql, val, (err, result) => {
		res.json(result);
	})
})