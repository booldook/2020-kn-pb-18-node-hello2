const hddp = {
	createServer(fn) {
		const req = { name: "알이큐" }
		const res = { name: "알이에스" }
		fn(req, res);
	}
}

module.exports = hddp;