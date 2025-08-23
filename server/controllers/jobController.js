import Job from '../models/Job.js'
//Get all jobs

export const getJobs = async(req,res)=>{
    try {
         const jobs = await Job.find({visible:true}).populate({
            path:'company_id',
            select:'-password'
         })

         res.json({
            success:true,
            jobs
         })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

//get a single job by ID

export const getJobByID = async(req,res)=>{
    try {
        const {id} = req.params
        const job = await Job.findById(id).populate({
            path:'company_id',select:'-password'
        })
        if(!job){
            return res.json({
                success:false,
                message:'Job Not Found'
            })
        }
        return res.json({
            success:true,
            job
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}