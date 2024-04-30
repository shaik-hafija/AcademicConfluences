const mongoose = require('mongoose');


module.exports = mongoose.model('events', {
    e_name: String,
    e_type: String,
    e_sdate:Date,
    e_edate:Date,
    e_poster:String,
    e_fee:Number,
    e_contact:Number,
    e_country:String,
    e_state:String,
    e_city:String,
    e_address:String,
    e_more:String,
    e_clg:String,
});
