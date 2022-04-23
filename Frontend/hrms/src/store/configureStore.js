import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import CookieService from "../services/cookieService";
import { CookieTypes } from "../utils/CookieTypes";
import rootReducer from "./rootReducer";

const middleware = [thunk]

const auth = CookieService.get(CookieTypes.AUTH);

const initialState = {
    auth: {user: auth},
};

export function configureStore() {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}