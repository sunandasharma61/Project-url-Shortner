const express=require('express');
const bodyParser=require('body-parser');
const { default: mongoose }=require('mongoose');
const route=require('./routes/route.js');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://url-shortner:Sunanda06*_@cluster0.kcc7xh8.mongodb.net/user4", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/',route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
