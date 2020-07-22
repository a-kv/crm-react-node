import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {GiraffeHouseReducer} from "./reducer";
import { reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    houses: GiraffeHouseReducer,
    form: formReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))