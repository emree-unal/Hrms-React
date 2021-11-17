import { combineReducers } from "redux";
import candidateReducer from "./candidateReducer";
import jobAdvertisementReducer from "./jobAdvertisementReducer";


const rootReducer=combineReducers({
    jobs:jobAdvertisementReducer,
    candidates:candidateReducer
    
})

export default rootReducer;

