import mongoose from "mongoose";

const designationMasterSchema = new mongoose.Schema ({
    designationName: {
        type: String,
        required: true
    },

    designationCode: {
        type: String,
        required: true
    },

    del: {
        type: String,
    },

    token: {
        type: String,
    },
}, {

    timestamps: true  // Adds createdAt and updatedAt fields
});

const designationMasterModel = mongoose.model('designation_master', designationMasterSchema );

export default designationMasterModel;