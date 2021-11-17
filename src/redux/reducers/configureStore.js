import { applyMiddleware,createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";


export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}