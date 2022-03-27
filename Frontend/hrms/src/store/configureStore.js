import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CookieTypes } from "../utils/cookieTypes";
import rootReducer from "./rootReducer";
import Cookies from 'js-cookie'
const middleware = [thunk]
let auth = null
try {
    auth = JSON.parse(Cookies.get(CookieTypes.AUTH) || {}) 
    console.log(auth)
} catch {}
const initial = {
    auth: {
        data: auth
    } 
}
export function configureStore() {
    return createStore(rootReducer, initial, composeWithDevTools(applyMiddleware(...middleware)))
}