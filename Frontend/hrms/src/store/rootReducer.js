import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import companySectorReducer from "./reducers/companySectorReducer";
import favoriteJobAdvertsReducer from "./reducers/favoriteJobAdvertReducer";
import jobAdvertismentReducer from "./reducers/jobAdvertismentReducer";
import jobPositionReducer from "./reducers/jobPositionReducer";
import schoolReducer from "./reducers/schoolReducer";
import skillReducer from "./reducers/skillReducer";

const rootReducer= combineReducers({

    jobPositions:jobPositionReducer,
    skills:skillReducer,
    schools:schoolReducer,
    cities:cityReducer,
    jobAdvertisements:jobAdvertismentReducer,
    companySectors:companySectorReducer,
    favorites:favoriteJobAdvertsReducer
})
export default rootReducer