const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// aziN7J3Rs3eKKSh2
const url = "mongodb+srv://admin1:aziN7J3Rs3eKKSh2@cluster0.6jmncnt.mongodb.net/Lab3_doanbvph31058";
const connect = async () =>{
    try{
          await  mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,

          })
          console.log("Connect success");
    }catch (ex){
        console.log("Connect fall", ex);
    }

}


module.exports = {connect};