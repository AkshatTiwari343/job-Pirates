import User from "../models/User.js";


//get user data
export const getUserData = async(req,res) => {
    const userId = req.auth.userId;
    try {
        const user = await User.findById(userId)
        if(!user){
            return res.json({
                success:false,
                messsge:'User Not Found.'
            })
        }
        res.json({
                success:true,
                user
            })
    } catch (error) {
        res.json({
            success:false,
            messsge:error.messsge
        })
    }
}

//apply for a job
export const applyForJob = async(req,res) => {

}

//get user applied application

export const getUserJobApplications = async(req,res)=>{

}

//update user details (resume)

export const updateUserResume = async(req,res) => {

}