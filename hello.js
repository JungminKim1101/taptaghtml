/*const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;
let indexFile;
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};
const server = http.createServer(requestListener);
fs.readFile(__dirname + "/layout.html")
  .then((contents) => {
    indexFile = contents;
    app.use(express.static(path.join(__dirname, "public")));
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });*/
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/layout.html");
});
app.use(express.static(__dirname + "/public"));
app.listen(3000);
