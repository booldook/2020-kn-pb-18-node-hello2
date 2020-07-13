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








