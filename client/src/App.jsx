import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Applications from './pages/Applications.jsx'
import RecuiterLogin from './components/RecuiterLogin.jsx'
import { AppContext } from './context/AppContext.jsx'

const App = () => {
  const {showRecruiterLogin} = useContext(AppContext);

  return (
    <div>
      {showRecruiterLogin && <RecuiterLogin />}
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications/>} />
      </Routes>
    </div>
  )
}


export default App