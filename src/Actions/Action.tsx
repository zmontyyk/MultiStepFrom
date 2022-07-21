import { BasicformationType } from "../interface/models"
import { actionState } from "../interface/models"

export const Basicformation =(Step_1:actionState)=>{
   return{
    type:"BASIC_INFO",
    payload:Step_1
   }
} 
export const EmployeeInfo =(Sect_2:actionState)=>{
   return{
    type:"EMPL_INFO",
    payload:Sect_2
   }
} 
export const Address_ =(Sect_3:actionState)=>{
   return{
    type:"ADDRESS",
    payload:Sect_3
   }
} 
export const General_info =(Sect_4:actionState)=>{
   return{
    type:"GENREAL_INFO",
    payload:Sect_4
   }
} 
export const Projects_ =(Sect_5:actionState)=>{
   return{
    type:"PREJECTS",
    payload:Sect_5
   }
} 





export const Progressbar=()=>({
   type: "INCREMENT"
 });
 
export const ProgressbarDeC=()=>({
   type: "DNCREMENT"
 });
 


export const progress1=(Value:Boolean)=>{
   return{
      type:'STEP_1',
      payload:Value
   }
}
export const progress2=(Value:Boolean)=>{
   return{
      type:'STEP_2',
      payload:Value
   }
}
export const progress3=(Value:Boolean)=>{
   return{
      type:'STEP_3',
      payload:Value
   }
}
export const progress4=(Value:Boolean)=>{
   return{
      type:'STEP_4',
      payload:Value
   }
}
export const progress5=(Value:Boolean)=>{
   return{
      type:'STEP_5',
      payload:Value
   }
}

export const progress_res1=(Value:Boolean)=>{
   return{
      type:'STEP__1',
      payload:Value
   }
}
export const progress_res2=(Value:Boolean)=>{
   return{
      type:'STEP__2',
      payload:Value
   }
}
export const progress_res3=(Value:Boolean)=>{
   return{
      type:'STEP__3',
      payload:Value
   }
}
export const progress_res4=(Value:Boolean)=>{
   return{
      type:'STEP__4',
      payload:Value
   }
}
export const progress_res5=(Value:Boolean)=>{
   return{
      type:'STEP__5',
      payload:Value
   }
}


export const enableTab1 =(value:Boolean)=>{
  return{
   type:'enableTab_1',
      payload:value
  }
}
export const enableTab2 =(value:Boolean)=>{
  return{
   type:'enableTab_2',
      payload:value
  }
}
export const enableTab3 =(value:Boolean)=>{
  return{
   type:'enableTab_3',
      payload:value
  }
}
export const enableTab4 =(value:Boolean)=>{
  return{
   type:'enableTab_4',
      payload:value
  }
}
export const enableTab5 =(value:Boolean)=>{
  return{
   type:'enableTab_5',
      payload:value
  }
}

