const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world Bis");
});


app.get('/apple-app-site-association', function(request, response) {
  console.log('trying to download')
  response.sendFile('./apple-app-site-association');
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});