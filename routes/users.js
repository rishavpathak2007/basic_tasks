const mongoose =  require("mongoose");

mongoose.connect("mongodb+srv://Rishav:Rishav@cluster0.ollqzog.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.Schema({
    username: {
        type: String, //varchar(255)
        required: true
    },

    userfeedback: {
        type: String, 
        required: true,
    }

});

module.exports = mongoose.model('schema', db);
