const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/hong', (req, res) => {
	let i;
	let html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>
		<link rel="stylesheet" href="/css/all.min.css">
		<link rel="stylesheet" href="/css/animate.css">
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/base.css">
		<link rel="stylesheet" href="/css/index.css">
		<script src="/js/jquery-3.5.1.min.js"></script>
		<script src="/js/bootstrap.bundle.min.js"></script>
		<script src="/js/imagesloaded.pkgd.min.js"></script>
	</head>
	<body>
	<div class="wrapper">`;
	for(i=0; i<100; i++) {
		html += `<h1>아버지를 아버지라...</h1>`;
	}
	html += `
		</div>
		<script src="/js/index.js"></script>
	</body>
	</html>
	`;
	res.send(html);
});












app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});