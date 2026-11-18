const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Cloud Provisioned & Scaled Website!</h1><p>Status: Running</p>");
});

server.listen(port, () => console.log(`Server running on port ${port}`));
