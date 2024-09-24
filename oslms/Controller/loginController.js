import userMasterModel from "../Models/userMaster.js";
import JWT from "../Middleware/auth.js";

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userMasterModel.findOne({ userName, password });
    if (!user || !user._id) throw new Error("Invalid username or password");

    const token = JWT.generateToken(user.toObject());

    req.user = token;
    res.status(200).json({
      message: "Login successfully!",
      token: token,
      status: 1,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: 0,
    });
  }
};

export default { loginUser };
