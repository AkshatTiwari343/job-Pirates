import express from 'express'
import { changeJobApplicationStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJOb, loginCompany, postJOb, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMid.js'

const router = express.Router()

// Register a company

router.post('/register',upload.single('image'),registerCompany)

//company login
router.post('/login',loginCompany)
//get company data
router.get('/company',protectCompany, getCompanyData)

//post a job
router.post('/post-job',protectCompany,postJOb)

//get applicant data of company

router.get('/applicants',protectCompany,getCompanyJobApplicants)

//get company job-list 

router.get('/list-jobs',protectCompany,getCompanyPostedJOb)

// change aaplication status

router.post('/change-status',protectCompany,changeJobApplicationStatus)

//change application visibility

router.post('/change-visibility',protectCompany,changeJobVisibility)

export default router