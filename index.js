const path = require('path');
const express = require('express'); 

const publicPath = path.join(__dirname, './public');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`);
})