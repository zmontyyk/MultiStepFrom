import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { BasicformationType } from '../interface/models'
import { Basicformation } from '../Actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Progressbar, ProgressbarDeC,progress1,enableTab1} from '../Actions/Action'
import { RootState } from '../interface/models';
import { Progress_bar } from '../Progress_bar';



function BasicInformation({ProgressCheck}:any) {
  const dispatch = useDispatch()
  const navigate = useNavigate()




   const [Step_1Progress, setStep_1Progress] = useState<boolean>()
   
   

  //  useFrom Hook ++++
  const { register, handleSubmit, setValue, getValues, watch, formState: { errors } } = useForm<BasicformationType>({
    mode: "onChange"

  });

  const onSubmit: SubmitHandler<BasicformationType> = (fieldValue) => {

    dispatch(Basicformation(fieldValue))
    navigate('/EmployeeInformation') 
  }

  // const watchAll = watch()s


  // previousData userData setting  into input fields if available
  const previousData = useSelector((state: RootState) => {
    return state?.currentUserData?.Step_1
  })


  const ProgressbarData = useSelector((state: any) => {
    return state.ProgressBarflag?.ProgressbarFlag1
  })
  const ProgressFlagRes = useSelector((state:any)=>{
    return state?.ProgressReverse?.ProgressReverse1
  })
 
  
  
  useEffect(() => {
    dispatch(enableTab1(true))
    setValue('firstName', previousData.firstName)
    setValue("LastName", previousData.LastName)
    setValue("email", previousData.email)
    setValue("Age", previousData.Age)
    setValue("gender", previousData.gender)

  }, [])

  const getValuess = watch()

  const progress=()=>{
    const isNullish = Object.values(getValuess).every(value => {
      // console.log(value)
      if (value !== undefined && value !== "") {
        return true
         
      }
      return false;
    });
    console.log(isNullish);
    
   dispatch(progress1(isNullish))
  }
  


  


  // to Block 
  const blockInvalidChar = (e: { key: string; preventDefault: () => any; }) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();



  return (
    <div className='animate__animated animate__fadeIn container-sm ' >
    
      <h2 className='text mt-5' >Basicformation</h2>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">

          {/* First Name  */}
          <label className=" lable form-label">First Name</label>
          <input autoComplete='off' type="text" className="form-control" {...register("firstName",
            { required: true, })} placeholder='FirstName' />
          {errors.firstName && <span className="text-danger">This field is required</span>}
        </div>


        <div className="col-md-6">
          <label className=" lable form-label">Last Name</label>
          <input type="text" className="form-control" {...register("LastName", {
            required: true,
          })} placeholder='LastName' />
          {errors.LastName && <span className="text-danger">This field is required</span>}
        </div>


        <div className="col-12">
          <label className=" lable form-label">Email</label>
          <input type="text" className="form-control" {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
          })} placeholder="Email Address" />
          {errors.email?.type === 'required' && <span className="text-danger" >required </span>}
          {errors.email?.type === 'pattern' && <span className="text-danger" > Invalid e-mail</span>}
        </div>


        <div className="col-md-3">
          <label className="" htmlFor=""> Age: </label>
          <input onKeyDown={blockInvalidChar} placeholder="Age" className="form-control" type="number" {...register("Age", { max: 100, min: 10, required: true })} />
          {errors.Age?.type === 'required' && <span className="text-danger" >required</span>}
          {errors.Age?.type === 'max' && <span className="text-danger" > please correct  Enter correct   age !</span>}
          {errors.Age?.type === 'min' && <span className="text-danger" > sorry your not qualified  !</span>}
        </div>


        <label className='lable' >Gender</label>
        {errors.gender?.type === 'required' && <span className="text-danger" >please pick one</span>}
        <div className="form-check">
          <input className="form-check-input" type="radio"   {...register("gender", { required: true })} value="Male" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio"  {...register("gender", { required: true })} value="Female" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio"  {...register("gender", { required: true })} value="other" id="flexRadioDefault3" />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Other
          </label>
        </div>

        <button id='next' onClick={()=>progress()} type="submit" className='btn btn-info' >Next</button>
      </form>
    </div>
  )
}

export default BasicInformation

