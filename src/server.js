const connect=require("../src/config/db");
const app=require("./index");
const port=process.env.PORT || 2222;
app.listen(port,async()=>{
 try{
  console.log(`Listining the ${port}`);
       await connect();
  

 }
 catch(err){
     console.log(err);
 }


});