const http = require("http");

const server = http.createServer((req, res) => {
  if ((req.url === "/")) {
    res.setHeader("Content-type", "text/html");
    res.end(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome ot the Calculator page</h1>
    <a href="/calculator">Click to open the calculator</a>
</body>
</html>`
);
  }else if(req.url.toLowerCase()==="/calculator"){
    res.setHeader("Content-type", "text/html")
    res.end(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action='/calculate-result' method='POST'>
        Enter First number: <input type="number" name="num1"> <br>
        Enter Second number: <input type="number" name="num2"> <br>
        <input type="submit">
    </form>
</body>
</html>`)
  }else if(req.url.toLowerCase()==="/calculate-result" && req.method==="POST"){
    const body= [];
    req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', ()=>{
        const fullBody = Buffer.concat(body).toString()
        const params = new URLSearchParams(fullBody)
        const num1 = Number(params.get("num1"))
        const num2 = Number(params.get("num2"))
        const result = num1 + num2 

         res.setHeader("Content-Type", "text/html");
        res.end(`
            <html>
            <head>
                <title>Result</title>
            </head>
            <body>
                <h1>Calculation Result</h1>
                <p>${num1} + ${num2} = <strong>${result}</strong></p>
                <a href="/">Go back home</a>
            </body>
            </html>
        `);
    })
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
