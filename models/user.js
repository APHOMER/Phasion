const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        unique: [true, 'A user with the email provided already exit'],
        trim: true,
        lowercase: true,
        required: true
    },
    
    // phasionName: {
    //     type: String,
    //     unique: true,
    //     trim: true,
    //     lowercase: true,
    //     required: true
    // },
    
    // password: {
    //     type: String,
    //     required: true,
    //     minLength: 7,
    //     trim: true,
    // },
    // date: {
    //     type: Date,
    //     default: Date.now()
    // },
    // 
},
{ 
    timestamps: true
}
)

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);
