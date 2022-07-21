import { RootState } from "../interface/models"

const initialState = {
    ProgressbarFlag1:null ,
    ProgressbarFlag2: null ,
    ProgressbarFlag3:null ,
    ProgressbarFlag4:null ,
    ProgressbarFlag5:null ,
}

interface Action {
    payload: boolean
    type: string
}

const ProgressBarflag = (state = initialState, action: Action) => {
    switch (action.type) {
        case "STEP_1":
            return {
                ...state,
                ProgressbarFlag1: action.payload
            }
        case "STEP_2":
            return {
                ...state,
                ProgressbarFlag2: action.payload
            }
        case "STEP_3":
            return {
                ...state,
                ProgressbarFlag3: action.payload
            }
        case "STEP_4":
            return {
                ...state,
                ProgressbarFlag4: action.payload
            }
        case "STEP_5":
            return {
                ...state,
                ProgressbarFlag5: action.payload
            }

        default: return state
    }
}

export default ProgressBarflag