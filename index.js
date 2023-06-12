// Requiring express in our server
const express = require('express');
const app = express();
const path = require("path");

const PORT = 3000;
 
app.use(express.json());
app.use(express.static(path.join(__dirname,'./static')));
app.use(express.urlencoded({ extended: true }));

let texts = [];

app.get('/hello',(req, res) => {
  res.json({
    msg: "Hello world"
  });
});

app.post("/list", async (req, res) => {
  const textItem = await req.body["input-text"]
  let inputValue = document.getElementById("text-input");
  texts.push(inputValue)
  res.json({text:texts});
  

})

app.get('/echo/:id', (req, res) => {
  res.json(req.params);
});

app.post('/sum', (req, res) => {
  const numbers = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0)
  res.json({sum: sum});
  
})





app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
