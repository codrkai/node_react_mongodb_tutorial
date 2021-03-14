const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const tweetSchema = new Schema({
    tweet: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});

const Users = mongoose.model('users', userSchema, 'users');
const Tweets = mongoose.model('tweets', tweetSchema, 'tweets');
const mySchemas = {'Users':Users, 'Tweets':Tweets};

module.exports = mySchemas;