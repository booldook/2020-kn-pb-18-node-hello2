/*********** 모듈 Import *************/
const express = require('express');
const app = express();
const path = require('path');

/*********** 서버 구동 *************/
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

/*********** 정적폴더 등록 *************/
app.use('/', express.static(path.join(__dirname, './public')));
