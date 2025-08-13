import React from 'react'
import Navbar from '../components/Navbar'

const ApplyJob = () => {
  const {id}= useParams();
  const [JobData, setJobData] = useState(null);
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default ApplyJob;