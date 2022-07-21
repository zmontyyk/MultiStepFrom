import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState, EmployeeInformationType } from '../interface/models';
import { EmployeeInfo, enableTab2, progress1, progress2, ProgressbarDeC, progress_res1 } from '../Actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Progressbar } from '../Actions/Action'
import { Progress_bar } from '../Progress_bar';


function EmployeeInformation() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  // UseFrom Hook +++++
  const { register, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm<EmployeeInformationType>({

  });


  const onSubmit: SubmitHandler<EmployeeInformationType> = (fieldValue) => {

    dispatch(EmployeeInfo(fieldValue))


    dispatch(enableTab2(true))
    navigate('/Address')
  }




  // previousData userData setting  into input fields if available
  const previousData = useSelector((state: RootState) => {
    return state.currentUserData.Step_2
  })

  const ProgressbarData = useSelector((state: any) => {
    return state.ProgressBarflag?.ProgressbarFlag2
  })
  const ProgressReverse = useSelector((state: any) => {
    return state.ProgressReverse.ProgressReverse1
  })


  useEffect(() => {
   
    setValue("companyName", previousData.companyName)
    setValue("pastRole", previousData.pastRole)
    setValue("PhoneNumber", previousData.PhoneNumber)
    setValue("EmergencyContact", previousData.EmergencyContact)
    setValue("Learninginstitution", previousData.Learninginstitution)
  }, [])

  const watchAllFields: any = watch();
  
  // Prevous Page method
  const  PrevousPage  = () => {
    const enableTab: any = previousData
    const finalData = { ...enableTab, ...watchAllFields }
    dispatch(EmployeeInfo(finalData))
    navigate('/BasicInformation')

    
    const isNullish = Object.values(watchAllFields).every(value => {
      if (value !== undefined && value !== "") {
        return true
      }
      return false;
    })
    dispatch(progress2(isNullish))
  }

//  NEXT PAGE +++++++++
  const progress=()=>{
    const isNullish = Object.values(watchAllFields).every(value => {
      // console.log(value)
      if (value !== undefined && value !== "") {
        return true
         
      }
      return false;
    });
   dispatch(progress2(isNullish))
  }
  




  // to remove 'e' from type=number feilds
  const blockInvalidChar = (e: { key: string; preventDefault: () => any; }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();




  return (
    <div className=' animate__animated animate__fadeIn container-sm '>



      <h2 className='text mt-5' >Employee Information</h2>
      <form className="row g-3 " onSubmit={handleSubmit(onSubmit)}>

        <div className="col-md-6">
          <label className=" lable form-label">Company Name</label>
          <input type="text" className="form-control" {...register("companyName", { required: true })} placeholder='companyName' />
          {errors.companyName && <span className="text-danger">This field is required</span>}
        </div>


        <div className="col-md-6">
          <label className=" lable form-label">Past Role</label>
          <input type="text" className="form-control" {...register("pastRole", { required: true })} placeholder='pastRole' />
          {errors.pastRole && <span className="text-danger">This field is required</span>}
        </div>

        <div className="col-md-6">
          <label className=" lable form-label">PhoneNumber</label>
          <input onKeyDown={blockInvalidChar}
            type="number" className="form-control" {...register("PhoneNumber", { required: true, minLength: 10, maxLength: 10 })} placeholder='PhoneNumber' />
          {errors.PhoneNumber?.type === 'required' && <span className="text-danger" >required </span>}
          {errors.PhoneNumber?.type === 'maxLength' && <span className="text-danger" >required 10 digits, match requested format!</span>}
          {errors.PhoneNumber?.type === 'minLength' && <span className="text-danger" >required 10 digits, match requested format!</span>}
        </div>


        <div className="col-md-6">
          <label className=" lable form-label">EmergencyContact</label>
          <input onKeyDown={blockInvalidChar}
            type="number" className="form-control" {...register("EmergencyContact", { required: true, minLength: 10, maxLength: 10 })} placeholder='EmergencyContact' />
          {errors.EmergencyContact?.type === 'required' && <span className="text-danger" >required </span>}
          {errors.EmergencyContact?.type === 'maxLength' && <span className="text-danger" >required 10 digits, match requested format!</span>}
          {errors.EmergencyContact?.type === 'minLength' && <span className="text-danger" >required 10 digits, match requested format!</span>}
        </div>


        <div className="col-md-6">
          <label className=" lable form-label">Learning Institution</label>
          <input type="text" className="form-control" {...register("Learninginstitution", { required: true })} placeholder='Learninginstitution' />
          {errors.Learninginstitution && <span className="text-danger">This field is required</span>}
        </div><br />

        <button onClick={() => PrevousPage()} type="button" className='btn btn2  btn-dark'>Prevous</button>c
        <button  onClick={()=>progress()} type="submit" className='btn btn2 btn-info' >Next</button>
      </form>

























    </div>
  )
}

export default EmployeeInformation
