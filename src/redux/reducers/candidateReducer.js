import * as actionTypes from "../actions/actionTypes"
import initialValues from "../initialValues/initialValues"

export default function candidateReducer(state=initialValues.candidates,action){
    switch (action.type) {
        case actionTypes.GET_CANDIDATES_SUCCESS:
            
            return action.payload;
           
    
        default:
            return state;
    }
}