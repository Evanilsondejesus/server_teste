 const express = require('express');
const path = require('path');
 



const app = express();

 










 


app.get('/teste',(req, res) =>{
  
  res.send("texte com sucesso")
  
})



















  


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
