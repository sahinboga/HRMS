
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/styles/App.css';
import Dashboard from './layouts/Dashboard';
import CookieService from './services/cookieService';
import JobSeekerService from './services/jobSeekerService';
import { setLoginData, setUserData } from './store/actions/authActions';
import { getAllCity } from './store/actions/cityActions';
import { getAllSectors } from './store/actions/companySectorActions';
import { getEmployer } from './store/actions/employerActions';
import { getJobSeekerFavorite } from './store/actions/favoriteJobAdvertactions';
import { getAllJobPositions } from './store/actions/jobPositionActions';
import { getAllByJobSeekerJobApplication } from './store/actions/jobSeekerJobApplicationAction';
import { getResume } from './store/actions/resumeActions';
import { getAllSchools } from './store/actions/schoolActions';
import { getAllSkills } from './store/actions/SkillActions';
import Constant from './utils/constants';
import { CookieTypes } from './utils/CookieTypes';

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { jobAdvertId } = useParams()

  useEffect(() => {
    dispatch(getAllJobPositions)
    dispatch(getAllSkills)
    dispatch(getAllSchools)
    dispatch(getAllCity)
    dispatch(getAllSectors)
    dispatch(getJobSeekerFavorite(Constant.JobSeekerId))
    dispatch(getEmployer(Constant.employerId))
    dispatch(getAllByJobSeekerJobApplication(Constant.JobSeekerId))

    const user = CookieService.get(CookieTypes.AUTH)

    if (user) {
      //constant içerisindeki Role ve RoleBasedRoute birleştirilecek
      let path = "" //Constant.Roles.find(x => x.id === user.role.id).routePath
      switch (user.user.role.id) {
        case Constant.Roles.Admin:
          path = Constant.RoleBasedRoute.Admin
          break
        case Constant.Roles.Employer:
          path = Constant.RoleBasedRoute.Employer
          break
        case Constant.Roles.JobSeeker:
          path = Constant.RoleBasedRoute.JobSeeker
          break
      }
      if(!window.location.pathname.startsWith(path)) {
        history.push(path)
      }
    }
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
      <Dashboard />
    </div>
  );
}

export default App;
