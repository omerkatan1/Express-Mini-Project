const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('../public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup routes for dynamic data
app.get("/api/reservations", function (req, res) {
    // TODO: retrieve reservations and send them back as JSON
    console.log(JSON.stringify(res.json));
});

// setup routes for dynamic data
app.post("/api/reservations", function (req, res) {
    // TODO: receive data and create reservation
    res.json(req.body);
});

app.listen(8080, () => {
    console.log(`Server folder: ${__dirname}`);
    console.log(`Static root folder should be: ${__dirname + '/../public'}`);
});

