import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import cityReducer from "./reducers/cityReducer";
import companySectorReducer from "./reducers/companySectorReducer";
import employerReducer from "./reducers/employerReducer";
import favoriteJobAdvertsReducer from "./reducers/favoriteJobAdvertReducer";
import jobAdvertismentReducer from "./reducers/jobAdvertismentReducer";
import jobApplicationReducer from "./reducers/jobApplicationReducer";
import jobPositionReducer from "./reducers/jobPositionReducer";
import jobSeekerJobApplicationReducer from "./reducers/jobSeekerJobApplicationReducer";
import resumeReducer from "./reducers/resumeReducer";
import schoolReducer from "./reducers/schoolReducer";
import skillReducer from "./reducers/skillReducer";

const rootReducer= combineReducers({
    auth: authReducer,
    jobPositions:jobPositionReducer,
    skills:skillReducer,
    schools:schoolReducer,
    cities:cityReducer,
    jobAdvertisements:jobAdvertismentReducer,
    companySectors:companySectorReducer,
    favorites:favoriteJobAdvertsReducer,
    resume:resumeReducer,
    employers:employerReducer,
    jobApplications:jobApplicationReducer,
    jobSeekerJobApplications:jobSeekerJobApplicationReducer,
})
export default rootReducer