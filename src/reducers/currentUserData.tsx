import { RootState } from "../interface/models"

const initialState=  {
  Step_1:{},
  Step_2:{},
  Step_3:{},
  Step_4:{},
  Step_5:{}
}
  
interface Action{
  payload: RootState 
  type:string
}

  const currentUserData = (state=initialState, action:Action) => {
    switch (action.type) {
     case "BASIC_INFO":
        return {
          ...state,  
          Step_1:action.payload
        }
     case "EMPL_INFO":
        return {
          ...state,  
          Step_2:action.payload
        }
     case "ADDRESS":
        return {
          ...state,  
          Step_3:action.payload
        }
     case "GENREAL_INFO":
        return {
          ...state,  
          Step_4:action.payload
        }
     case "PREJECTS":
        return {
          ...state,  
          Step_5:action.payload
        }

      default: return state
    }
  }

  export default currentUserData