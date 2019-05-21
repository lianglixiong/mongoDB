var TbInformationList =require('../schema/bbf_information/tb_information_list_schema.js');

let list = function(callback){
    /*var TbInformation = new TbInformation({
        Name:data.name
    });*/
    /*TbInformationList.find().limit(20).exec(function(err,company){
        if(!err){
            callback(null,company);
        }
        else{
　　　　　　　callback(err,null);
        }
    });*/
    TbInformationList.find(function(err,company){
        if(!err){
            callback(null,company);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};

module.exports = {
    list:list
}