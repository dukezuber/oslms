import designationMasterModel from "../Models/designationMaster.js"

const createDesignation = async (req, res) => {
    const newDesignation = {
        designationName: req.body.designationName,
        designationCode: req.body.designationCode,
    }

    const saveRequest = new designationMasterModel(newDesignation);

    await saveRequest.save().then(data => {
        res.send({
            message:"Designation created successfully!!",
            user:data
        });
    }).catch( err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Designation"
        });
    }); 
};

export default createDesignation;