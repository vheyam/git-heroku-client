const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5446;


app.use(express.static('client'));






app.listen(PORT, () =>{
    console.log('server running on port ' + PORT);
});