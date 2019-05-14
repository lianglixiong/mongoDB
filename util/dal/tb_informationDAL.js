var TbInformation =require('../schema/bbf_information/tb_information_schema.js');

exports.create = function(callback){
    /*var TbInformation = new TbInformation({
        Name:data.name
    });*/
    TbInformation.find(function(err,company){
        if(!err){
            callback(null,company);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};