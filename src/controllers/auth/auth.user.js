const { errorResponse } = require("../../helper/error.response")
const ludoUser = require("../../models/ludo.user")


exports.userLogin  =  async (req, res) =>{

    try{
        let isUserExist = await ludoUser.findOne({
            email: req.body.email
        })
        if (isUserExist) {
            return errorResponse(res, 404, false, "You are already registered. Please login.");
        }
        else{
            let newUserCreated = await ludoUser.create({
                name: "random",
                email: req.body.email,
                otp: req.body.otp,
                token:"adminPercentage50To400"
            })
            if(!newUserCreated){
                return errorResponse(res, 404, false, "Something went wrong!!!")
            }else{
                return errorResponse(res, 201, true, "Account has been register successfully!!", newUserCreated)
            }
        }

    }catch(e){
        return errorResponse(res, false, 500, e.message)
    }

}