/*********** 모듈 Import *************/
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');

/*********** 서버 구동 *************/
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

/*********** JSON, req.body 파싱 *************/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*********** 정적폴더 등록 *************/
app.use('/', express.static(path.join(__dirname, './public')));

/*********** MySQL2 연결 *************/
const connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '000000',
	database: 'test1' 
});

/*********** 라우터 등록 *************/
/* app.get('/user/save', (req, res) => {
	const user = {
		userid: req.query.userid,
		userpw: req.query.userpw,
		username: req.query.username,
		email: req.query.email,
	}
	res.send(`${user.userid} / ${user.userpw} / ${user.username} / ${user.email}`);
}); */
app.get('/user/save', (req, res) => {
	// const user = {...req.query}
	// res.send(`${user.userid} / ${user.userpw} / ${user.username} / ${user.email}`);
	const { userid, userpw, username, email } = req.query;
	res.send(`<h1>${userid} / ${userpw} / ${username} / ${email}</h1>`);
});

app.post('/user/save', (req, res) => {
	const { userid, userpw, username, email } = req.body;
	const sql = `INSERT INTO users SET userid='${userid}', userpw='${userpw}', username='${username}', email='${email}'`;
	// const sql = 'INSERT INTO users SET userid=?, userpw=?, username=?, email=?';
	connect.query(sql, function(err, result) {
		res.json(result);
	});
});