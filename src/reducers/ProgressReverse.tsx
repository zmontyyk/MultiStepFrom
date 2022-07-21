import { RootState } from "../interface/models"

const initialState = {
    ProgressReverse1: true,
    ProgressReverse2: true,
    ProgressReverse3: true,
    ProgressReverse4: true,
    ProgressReverse5: true,
}

interface Action {
    payload: boolean
    type: string
}

const ProgressReverse = (state = initialState, action: Action) => {
    switch (action.type) {
        case "STEP__1":
            return {
                ...state,
                ProgressReverse1: action.payload
            }
        case "STEP__2":
            return {
                ...state,
                ProgressReverse2: action.payload
            }
        case "STEP__3":
            return {
                ...state,
                ProgressReverse3: action.payload
            }
        case "STEP__4":
            return {
                ...state,
                ProgressReverse4: action.payload
            }
        case "STEP__5":
            return {
                ...state,
                ProgressReverse5: action.payload
            }

        default: return state
    }
}

export default ProgressReverse