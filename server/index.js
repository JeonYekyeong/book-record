const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
   res.send("시작"); 
});

app.listen(port, () => {
    console.log(`Start... http://localhost:${port}`);
})