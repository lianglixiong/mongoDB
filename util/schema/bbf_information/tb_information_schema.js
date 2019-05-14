/**
 * tb_information集合
 */
var mongoose = require('../../../db/bbf_information_db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
    RECORDS: Schema.Types.Mixed,
});

module.exports = mongoose.model('TbInformation',UserSchema);