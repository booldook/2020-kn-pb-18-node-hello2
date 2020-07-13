/******** 외부모듈을 불러오기 ********/
const express = require('express');
const app = express();
const path = require('path');

/******** 절대주소 등록 ********/
const publicPath = path.join(__dirname, './public');


/******** 서버 구동 ********/
app.listen(3000, () => { console.log("http://127.0.0.1:3000") });


/******** 정적(static) 등록 ********/
app.use('/', express.static(publicPath));


/******** 동적(dyunamic) 등록 ********/
app.get('/res', (req, res) => {
	res.send("<h1>응답</h1>");
});

app.get('/res2', (req, res) => {
	res.json({
		firstName: "길동",
		lastName: "홍"	
	});
});

app.get('/res3', (req, res) => {
	res.download( path.join(__dirname, './public/css/base.css') );
});

app.get('/res4', (req, res) => {
	res.redirect('/html/index-hong.html');
});

app.get('/req', (req, res) => {
	console.log(req.query.name);
	console.log(req.query.age);
	sql = "SELECT * FROM user WHERE name='"+req.query.name+"' AND age="+req.query.age;
	res.send(sql);
});

app.get('/req2/:title', (req, res) => {
	const title = req.params.title;
	const books = {
		별주부전: '용왕이 나의 간을...',
		홍길동전: '아버지를 아버지라...',
		구운몽전: '한여름밤의 꿈...',
		춘향전: '그네타고 놀다가...',
		심청전: '아버지 눈을...',
	};
	if(books[title])
		res.send(`<h1>요청하신 ${title}의 내용은 [${books[title]}] 입니다.</h1>`);
	else
		res.send(`<h1>요청하신 ${title}을 찾을 수 없습니다.</h1>`);
});






// https://github.com/booldook




