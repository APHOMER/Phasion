const mongoose = require('mongoose');
// // const validator = require('validator');

const dbUrl = process.env.PORT ? process.env.ONLINE_MONGODB_URL : process.env.MONGODB_URL;

mongoose.set('strictQuery', true);
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
});







// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const mongoConnect =callback => {
//     MongoClient.connect(
//         dbUrl
//     ).then(client => {
//         console.log('MONGODB CONNECTED');
//         callback(client);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };

// module.exports = mongoConnect;
