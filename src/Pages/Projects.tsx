import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { currentUserData, experienceTypes, RootState } from '../interface/models'
import { useDispatch, useSelector } from 'react-redux';
import { enableTab5, progress5, Progressbar, ProgressbarDeC, Projects_ } from '../Actions/Action';


function Projects() {
  const dispatch = useDispatch()
  const navigate = useNavigate()




  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<experienceTypes>();
  // enableTab flag
  const enableTab: any = {
    enableTab: true
  }

  const onSubmit: SubmitHandler<experienceTypes> = (feildValue) => {


    dispatch(Projects_(feildValue))
    navigate('/FinalForm')
  }

  // previousData userData setting  into input fields if available

  const previousData = useSelector((state: RootState) => {
    return state.currentUserData.Step_5
  })


  const ProgressbarData = useSelector((state: any) => {
    return state.ProgressBarflag?.ProgressbarFlag5
  })



  useEffect(() => {
    dispatch(enableTab5(true))
    setValue("Projects", previousData.Projects)
    setValue("liveProjects", previousData.liveProjects)
    setValue("experience", previousData.experience)
  }, [])


  //  Prevous Page method

  const watchAllFields: any = watch();
  const PrevousPage = () => {
    const enableTab: any = previousData
    const finalData = { ...enableTab, ...watchAllFields }
    dispatch(Projects_(finalData))


    const isNullish = Object.values(watchAllFields).every(value => {
      if (value !== undefined && value !== "") {
        return true
      }
      return false;
    })
    dispatch(progress5(isNullish))
    navigate('/Generalinfo')

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
    dispatch(progress5(isNullish))
  }









  return (
    <div className='animate__animated animate__fadeIn'>
      <h2 className='text mt-5' >Projects</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <label className="form-label">What Projects Have You Worked On..?</label>
              <textarea  {...register("Projects", { required: true })} className="form-control" rows={5} placeholder='explain in brief...' ></textarea>
              {errors.Projects && <span className="text-danger">This field is required</span>}
            </div>

            <div className="col-5 mt-5">
              <label className="form-label">Have You Worked on any live Project?</label><br />
              <div className="   form-check form-check-inline">
                <input className="form-check-input" type="radio" {...register("liveProjects", { required: true })} value="Yes" />
                <label className="form-check-label" >Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" {...register("liveProjects", { required: true })} value="No" />
                <label className="form-check-label" >No</label>
              </div>
              {errors.liveProjects?.type === 'required' && <span className="text-danger" >please pick one</span>}

            </div>
            <div className="col-7 mt-5">
              <label className="form-label">How much experience do you have?</label><br />
              <input  {...register("experience", { required: true })} type="text" className="form-control" />
              {errors.experience && <span className="text-danger">This field is required</span>}
            </div>
          </div>

          <button type='button' onClick={() => PrevousPage()} className='btn mt-5 btn-dark'>Prevous</button>
          <button onClick={()=>progress()} className='btn mt-5  btn-info' >Submit</button>
        </div>
      </form>












    </div>
  )
}

export default Projects  