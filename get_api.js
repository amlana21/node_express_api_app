const req=require('request');

var get_list=(lang,callback)=>{
var url=`https://api.github.com/search/repositories?q=language:${lang}&sort=stars`;
// console.log('in system')
var resp=req({url,json:true,headers: {
    'User-Agent': 'My_node_app_1'
  }},(err,res,body)=>{

     if (err){
        //console.log('in err1');
        callback("Error in connecting to server");

     }else if(body.message==="Validation Failed"){
         callback('No results found');

     }else if(res.statusCode==200){
         
         callback(undefined,{
             count:body.total_count,
             itm:body.items
         });

     }
    //console.log(body);
});

};


module.exports={
get_list
};