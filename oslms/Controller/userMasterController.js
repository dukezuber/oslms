import userMasterModel from "../Models/userMaster.js"

const getuser = ((req, res) => {
    res.json(userMasterModel);
});

const createUser = async (req, res) => {
    const newUser = {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        postcode: req.body.postcode
    }

    const saveRequest = new userMasterModel(newUser);

    await saveRequest.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch( err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    }); 
};

export default {
    createUser,
    getuser,
};