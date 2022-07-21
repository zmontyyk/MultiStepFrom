import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState, generalInformationType } from '../interface/models'
import { enableTab4, General_info, progress4, ProgressbarDeC } from '../Actions/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Progressbar } from '../Actions/Action'

function Generalinfo() {

  const dispatch = useDispatch()
  const navigate = useNavigate()



  //  useFrom Hook ++++++
  const enableTab: any = {
    enableTab: true
  }
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<generalInformationType>();

  const onSubmit: SubmitHandler<generalInformationType> = (feildValue) => {

    dispatch(General_info(feildValue))
    dispatch(enableTab4(true))
    navigate('/Projects')
  }
   

  // previousData userData setting  into input fields if available
  const previousData = useSelector((state: RootState) => {
    return state.currentUserData.Step_4
  })




  useEffect(() => {
   
    setValue("Language", previousData.Language)
    setValue("frameworks", previousData.frameworks)
    setValue("hobbies", previousData.hobbies)
  }, [])


  // Prevous Page method
  const watchAllFields: any = watch();
  const PrevousPage = () => {
    const enableTab:any = previousData
    const finalData ={...enableTab,...watchAllFields}
    dispatch(General_info(finalData))


    const isNullish = Object.values(watchAllFields).every(value => {
      if (value !== undefined && value !== 0) {
        return true
      }
      return false;
    })
    dispatch(progress4(isNullish))
    navigate('/Address')
  }

  
  //  NEXT PAGE ++++++
  const progress = () => {
    const isNullish = Object.values(watchAllFields).every(value => {
      // console.log(value)
      if (value !== undefined && value !== "") {
        return true
      }
      return false;
    });
    dispatch(progress4(isNullish))
  }

  




  return (
    <div className='animate__animated animate__fadeIn Hob container mt-5'>
      <h2 className='text' >General Information</h2>

      {/* Language section */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className='mb-4'>How Many Programing Language Do You Know ?</h5>
        <div className="form-check form-check-inline">
          <input id="flexCheckDefault"  {...register("Language", { required: true })} className="form-check-input" type="checkbox" value="Java" />
          <label htmlFor='flexCheckDefault' className="form-check-label" >Java</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault1'  {...register("Language", { required: true })} className="form-check-input" type="checkbox" value="Python" />
          <label htmlFor='flexCheckDefault1' className="form-check-label" >Python</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault2' {...register("Language", { required: true })} className="form-check-input" type="checkbox" value="c" />
          <label htmlFor='flexCheckDefault2' className="form-check-label">C</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault3' {...register("Language", { required: true })} className="form-check-input" type="checkbox" value="JavaScript" />
          <label htmlFor='flexCheckDefault3' className="form-check-label">JavaScript</label>
        </div>
        {errors.Language?.type === 'required' && <span className="text-danger" >required</span>}

        {/* frameworks  section */}

        <h5 className='mt-5 mb-4 '>How Many frontend frameworks Do You Know ?</h5>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault4' {...register("frameworks", { required: true })} className="form-check-input" type="checkbox" value="React" />
          <label htmlFor='flexCheckDefault4' className="form-check-label" >React</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault5' {...register("frameworks", { required: true })} className="form-check-input" type="checkbox" value="Python" />
          <label htmlFor='flexCheckDefault5' className="form-check-label" >Next Js</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault6' {...register("frameworks", { required: true })} className="form-check-input" type="checkbox" value="Vue Js" />
          <label htmlFor='flexCheckDefault6' className="form-check-label">Vue Js</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault7'   {...register("frameworks", { required: true })} className="form-check-input" type="checkbox" value="Angular" />
          <label htmlFor='flexCheckDefault7' className="form-check-label">Angular Js</label>
        </div>
        {errors.frameworks?.type === 'required' && <span className="text-danger" >required</span>}


        {/* hobbies section */}

        <h5 className='mt-5 mb-4 '>please choose any hobbies given below !</h5>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault8'  {...register("hobbies", { required: true })} className="form-check-input" type="checkbox" value="Gym" />
          <label htmlFor='flexCheckDefault8' className="form-check-label" >Gym</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault9' {...register("hobbies", { required: true })} className="form-check-input" type="checkbox" value="Football" />
          <label htmlFor='flexCheckDefault9' className="form-check-label" >Football</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault10' {...register("hobbies", { required: true })} className="form-check-input" type="checkbox" value="Coding" />
          <label htmlFor='flexCheckDefault10' className="form-check-label">Coding</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault11' {...register("hobbies", { required: true })} className="form-check-input" type="checkbox" value="Tennis" />
          <label htmlFor='flexCheckDefault11' className="form-check-label">Tennis</label>
        </div>
        <div className="form-check form-check-inline">
          <input id='flexCheckDefault12' {...register("hobbies", { required: true })} className="form-check-input" type="checkbox" value="TableTennis" />
          <label htmlFor='flexCheckDefault12' className="form-check-label"> TableTennis</label>
        </div>
        {errors.hobbies?.type === 'required' && <span className="text-danger" >required</span>}
        <br />


        <button onClick={() => PrevousPage()} type="button" className='btn  btn-dark'>Prevous</button>
        <button onClick={()=>progress()} type="submit" className='btn  btn-info' >Next</button>
      </form>
    </div>
  )
}

export default Generalinfo
