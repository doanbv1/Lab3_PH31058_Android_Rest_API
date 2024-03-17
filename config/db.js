const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const url = "mongodb+srv://admin1:WVD3OJI0WaAjhwXt@cluster0.6jmncnt.mongodb.net/Lab3_doanbvph31058";
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