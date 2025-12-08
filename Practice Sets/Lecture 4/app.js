const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Myntra</h1>");
    res.write("<nav>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/men'>Men</a>");
    res.write("<a href='/women'>Women</a>");
    res.write("<a href='/kids'>Kids</a>");
    res.write("<a href='/cart'>Cart</a>");
    res.write("</nav>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>This is the Men's page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>This is the Women's page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>This is the Kid's page</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>This is the Cart</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Enter your details:</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
