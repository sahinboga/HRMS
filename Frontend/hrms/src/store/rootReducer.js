import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import companySectorReducer from "./reducers/companySectorReducer";
import employerJobApplicationReducer from "./reducers/employerJobApplicationReducer";
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
    employerJobApplications:employerJobApplicationReducer
})
export default rootReducer