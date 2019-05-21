var TbInformation =require('../schema/bbf_information/tb_information_schema.js');

let create = function(callback){
    /*var TbInformation = new TbInformation({
        Name:data.name
    });*/
    TbInformation.find({'_id': '5cd7c66a6d303ed0bec85683'}).where('RECORDS').limit(20).exec(function(err,company){
        if(!err){
            callback(null,company);
        }
        else{
　　　　　　　callback(err,null);
        }
    });
};

module.exports = {
    create:create
}