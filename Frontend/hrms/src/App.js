
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './layouts/Dashboard';
import { getAllJobPositions } from './store/actions/jobPositionActions';
import { ToastContainer } from 'react-toastify';
import { getAllSkills } from './store/actions/SkillActions';
import { getAllSchools } from './store/actions/schoolActions';
import { getAllCity } from './store/actions/cityActions';
import { getAllJobAdvertisments } from './store/actions/jobAdvertisementAction';
import { getAllSectors } from './store/actions/companySectorActions';
import { getJobSeekerFavorite } from './store/actions/favoriteJobAdvertactions';
import Constant from './utils/constants';
import { getResume } from './store/actions/resumeActions';
import { getEmployer } from './store/actions/employerActions';
import { getAllByJobSeekerId, getAllByJobSeekerJobApplication } from './store/actions/jobSeekerJobApplicationAction';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllJobPositions)
    dispatch(getAllSkills)
    dispatch(getAllSchools)
    dispatch(getAllCity)
    dispatch(getAllSectors)
    dispatch(getJobSeekerFavorite(Constant.JobSeekerId))
    dispatch(getResume(Constant.JobSeekerId))
    dispatch(getEmployer(Constant.employerId))
    dispatch(getAllByJobSeekerJobApplication(Constant.JobSeekerId))
   
  }, [])
  return (
    <div className="App">
      <ToastContainer
      theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Dashboard/>
    </div>
  );
}

export default App;
