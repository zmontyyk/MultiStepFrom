import { RootState } from "../interface/models"

const initialState = {
    enableTab_1: false,
    enableTab_2: false,
    enableTab_3: false,
    enableTab_4: false,
    enableTab_5: false,
}

interface Action {
    payload: boolean
    type: string
}

const  enableTab = (state = initialState, action: Action) => {
    switch (action.type) {
        case "enableTab_1":
            return {
                ...state,
                enableTab_1: action.payload
            }
        case "enableTab_2":
            return {
                ...state,
                enableTab_2: action.payload
            }
        case "enableTab_3":
            return {
                ...state,
                enableTab_3: action.payload
            }
        case "enableTab_4":
            return {
                ...state,
                enableTab_4: action.payload
            }
        case "enableTab_5":
            return {
                ...state,
                enableTab_5: action.payload
            }

        default: return state
    }
}

export default  enableTab