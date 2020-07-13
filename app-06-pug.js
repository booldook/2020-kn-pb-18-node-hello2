/******** 외부모듈을 불러오기 ********/
const express = require('express');
const app = express();
const path = require('path');

/******** 절대주소 등록 ********/
const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');


/******** 서버 구동 ********/
app.listen(3000, () => { console.log("http://127.0.0.1:3000") });


/******** View Engine 등록 ********/
app.set('view engine', 'pug');
app.set('views', viewsPath);
app.locals.pretty = true;


/******** 정적(static) 등록 ********/
app.use('/', express.static(publicPath));


/******** 동적(dyunamic) 등록 ********/
app.get('/index', (req, res) => {
	res.render('index.pug');
});

app.get('/test', (req, res) => {
	res.render('test.pug');
});

app.get('/join', (req, res) => {
	res.render('join.pug');
});

app.get('/about', (req, res) => {
	res.render('about.pug');
});

app.get('/pf', (req, res) => {
	res.render('pf.pug');
});









