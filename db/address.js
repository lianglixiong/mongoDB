
/**
 * 地址信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({          
    RECORDS: Schema.Types.Mixed,
});

module.exports = mongoose.model('uses',AddressSchema);