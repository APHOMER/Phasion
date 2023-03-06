const mongoose = require('mongoose');
// const validator = require('validator');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/PhasionDB', {
    useNewUrlParser: true,
    // useCreateIndex: true
});

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
// });

