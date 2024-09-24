import mongoose from "mongoose";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userMasterSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    userName: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    postcode: {
        type: String,
        required: true
    },

    token: {
        type: String,
    },
}, {

    timestamps: true  // Adds createdAt and updatedAt fields
});

const userMasterModel = mongoose.model('user_master', userMasterSchema );

export default userMasterModel;