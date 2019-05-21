/**
 * tb_information集合
 */
var mongoose = require('../../../db/bbf_information_db.js'),
    Schema = mongoose.Schema;

var TbInformationList = new Schema({          
    /*"id" : Number,
    "title" : String,
    "keywords" : String,
    "recommendation" : Number,
    "image_path" : String,
    "pid" : Number,
    "text_content" : String,
    "INTroduction" : String,
    "status" : Number,
    "read_amount" : Number,
    "week_amount" : Number,
    "praise_amount" : Number,
    "author" : String,
    "create_time" : String,
    "update_time" : String,
    "updatetime" : String*/
    RECORDS: Schema.Types.Mixed,
});

module.exports = mongoose.model('TbInformationList',TbInformationList,'tb_information_list');