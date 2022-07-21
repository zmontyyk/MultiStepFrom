import { combineReducers } from "redux";
import currentUserData from "./currentUserData"
import {Progressbar} from './Progressbar' 
import ProgressBarflag from "../reducers/ProgressBarflag"
import  ProgressReverse from './ProgressReverse'
import enableTab from './Tabs'
 


const rootReducer =combineReducers({
    currentUserData:currentUserData,
    Progressbar:Progressbar,
    ProgressBarflag:ProgressBarflag,
    ProgressReverse:ProgressReverse,
    enableTab:enableTab
   
})

export default rootReducer