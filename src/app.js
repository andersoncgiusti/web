const express = require('express');
const app = express();

//imports routes
const statusRouter = require('./routes/status.router');
const pilotsRouter = require('./routes/pilots.router');
const booksRouter = require('./routes/books.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

app.get('/', (req, res) => {
  res.json({ success: true })
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(statusRouter);
app.use(pilotsRouter);
app.use(booksRouter);

module.exports = app;