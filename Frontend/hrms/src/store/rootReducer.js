import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import companySectorReducer from "./reducers/companySectorReducer";
import employerReducer from "./reducers/employerReducer";
import favoriteJobAdvertsReducer from "./reducers/favoriteJobAdvertReducer";
import jobAdvertismentReducer from "./reducers/jobAdvertismentReducer";
import jobPositionReducer from "./reducers/jobPositionReducer";
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
    employers:employerReducer
})
export default rootReducer