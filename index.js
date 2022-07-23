const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
