const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT||3000;
const get_api=require('./get_api.js');


var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res)=>{
    var api=get_api.get_list('javascript',(errorMessage,response)=>{
        //console.log(errorMessage);
        if(errorMessage){
            
            res.render('list.hbs',{
                val:errorMessage
            });

        }else{
            var l1=JSON.stringify(response.itm);
            var l2=[];
            var n=0;
            while (n<10){
                l2[n]=response.itm[n].name;
                n=n+1;
            }
            //console.log(l1);
            res.render('list.hbs',{
                val:response.count,
                nm1:l1,
                nme:l2
            });

        }      


    });
    
});


app.listen(port,()=>{
    console.log('Server is up');
});