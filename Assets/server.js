const express = require('express');
const path = require('path');
const app = express(); 

app.use(express.static('../public'));


app.listen(8080, () => {
    console.log(`Server folder: ${__dirname}`);
    console.log(`Static root folder should be: ${__dirname + '/../public'}`);
});