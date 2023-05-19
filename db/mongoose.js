const mongoose = require('mongoose');
// // const validator = require('validator');

const dbUrl = process.env.PORT ? process.env.ONLINE_MONGODB_URL : process.env.MONGODB_URL;

mongoose.set('strictQuery', true);
// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });

mongoose.connect(dbUrl,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });




// mongoose.set('strictQuery', false);
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI)
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch(error) {
//         console.log(error);
//         process.exit(1);
//     }
// }



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
