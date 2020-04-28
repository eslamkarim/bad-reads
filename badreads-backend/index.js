const express = require("express");
const loginRouter = require("./routes/loginRouter");

var app = express();

app.use(express.json());
app.use('/login',loginRouter);



app.listen(3000, function () {
    console.log('listening on port 3000!');
});
