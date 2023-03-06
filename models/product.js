const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});


// <%cloth.clothImages.forEach(image => {%>
        
//     <img crossorigin="anonymous" class="show" alt="....." src="<%=image.url%>"></img>

// <%})%>

// ImageSchema.virtual('thumb').get(function() {
ImageSchema.virtual('thumbnail').get(function() {
    // return this.url.replace('/upload', '/upload/w_200');
    // return this.url.replace('/upload', '/upload/w_400');
    this.url.replace('/upload', '/upload/w_200');
});

const ProductSchema = new Schema ({
    ownerName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 16,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    contact: {
        type: Number,
        required: false,
    },
    // clothImage: {
    //     type: String,
    //     required: true   
    // },
    clothImages:[ImageSchema],
//     clothImages:[ 
//         {
//             url: String,
//             filename: String,
//             // required: true   
//         }
// ],
    measurements: {
        type: String,
        enum: ['inches', 'centimeter', 'meter'],
        default: 'inches',
        required: true
    },
    price: {
        type: Number,
        min: [0, 'price can not be less than zero(0)'],
        max: [10000000, 'this is too much, are you a Ritualist?'],
        required: true
    },
    deposit: {
        type: Number,
        min: 0,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: [true, 'Kindly add delivery date'],
        format: "dd-MM-yyyy", // "yyyy-MM-dd"
        // default: Date.now();
        default: Date.now
    },
    leg: {
        type: Number,
        required: true
    },
    neck: {
        type: Number,
        required: true
    },
    waist: {
        type: Number,
        required: true
    },
    shoulder: {
        type: Number,
        required: true
    },
    arm: {
        type: Number,
        required: true
    },
    chest: {
        type: Number,
        required: true
    },
    bicep: {
        type: Number,
        required: true
    },
    wrist: {
        type: Number,
        required: true
    },
    back: {
        type: Number,
        required: true
    }, 
    stomach: {
        type: Number,
        required: true
    }, 
    hip: {
        type: Number,
        required: true
    }, 
    thigh: {
        type: Number,
        required: true
    },
},
{ 
    timestamps: true
}
)


module.exports = mongoose.model('Product', ProductSchema);
