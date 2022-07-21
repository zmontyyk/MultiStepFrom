import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Contrydata } from '../countriesData/Data'
import { useForm, SubmitHandler } from "react-hook-form";
import { addressInfo } from '../interface/models'
import { useDispatch, useSelector } from 'react-redux';
import { Address_, enableTab3, progress2, progress3, Progressbar, ProgressbarDeC }
  from '../Actions/Action';
// import './App.css'

function Address() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // enableTab flag


  //  useFrom Hook +++++
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<addressInfo>();
  const onSubmit: SubmitHandler<addressInfo> = (feildValue) => {

    dispatch(Address_(feildValue))
    dispatch(enableTab3(true))
    navigate('/Generalinfo')
  }


  // previousData userData saving  into input fields if available
  const previousData = useSelector((state: any) => {
    return state?.currentUserData.Step_3
  })


 

  useEffect(() => {
   
    setValue("Address", previousData.Address)
    setValue("Address2", previousData.Address2)
    setValue("Country", previousData.Country)
    setValue("State", previousData.State)
    setValue("city", previousData.city)
    setSelectedCountry(previousData.Country)
    setSelectedState(previousData.State)
    setSelectedCity(previousData.city)
  }, [])


  // Prevous Page lmethod
  const watchAllFields = watch();

  const PrevousPage = () => {
    const enableTab: any = previousData
    const finalData = { ...enableTab, ...watchAllFields }
    dispatch(Address_(finalData))
    navigate('/EmployeeInformation')


    const isNullish = Object.values(watchAllFields).every(value => {
      if (value !== undefined && value !== "") {
        return true
      }
      return false;
    })
    dispatch(progress3(isNullish))



  }


  //  NEXT PAGE +++++++++
  const progress = () => {
    const isNullish = Object.values(watchAllFields).every(value => {
      // console.log(value)
      if (value !== undefined && value !== "") {
        return true
      }
      return false;
    });
    dispatch(progress3(isNullish))
  }











  // reseting fields for re-validation
  const Reset = () => {
    setValue("State", "")
    setValue("city", "")
    setSelectedState('')
    setSelectedCity('')
  }


  const [selectedCountry, setSelectedCountry] = useState<string>()
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();


  const availableState = Contrydata.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find((s) => s.name === selectedState);




  return (
    <div className='container-sm animate__animated animate__fadeIn '>

      <h1 className='text mt-5'> Address !  </h1>

      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

        <div className="col-12">
          <label className="" htmlFor=""> Address </label>
          <input placeholder="Address" type='text' className="form-control"  {...register("Address", { required: true })} />
          {errors.Address?.type === 'required' && <span className="text-danger" >required</span>}
        </div>

        <div className="col-12">
          <label className="form-label" >Address2</label>
          <input type="text" className="form-control"  {...register("Address2", { required: true })} placeholder="Apartment, studio, or floor" />
          {errors.Address2?.type === "required" && <span className="text-danger">This field is required</span>}
        </div>






        <div className="col-md-4">
          <label className="form-label">Country</label>
          <select defaultValue={'DEFAULT'}
            {...register("Country", { required: true, onChange: (e) => { setSelectedCountry(e.target.value) } })}
            className="form-select"
            placeholder="Country"
            value={selectedCountry}
            name='Country'
            onClick={() => Reset()}

          >
            <option value='' defaultChecked   >--Choose Country--</option>
            {Contrydata.countries.map((value, key) => {
              return (
                <option value={value.name} key={key}>
                  {value.name}
                </option>
              );
            })}
          </select>
          {errors.Country?.type === "required" && <span className="text-danger"> Country is required</span>}
        </div>

        <div className="col-md-4">
          <label className="form-label">State</label>
          <select defaultValue={'DEFAULT'}
            {...register("State", { required: true, onChange: (e) => setSelectedState(e.target.value) })}
            className="form-select"
            placeholder="State"
            value={selectedState}
          // onBlur={(e) => setSelectedState(e.target.value )}
          >
            <option value='' defaultChecked  >--Choose State--</option>
            {availableState?.states.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {errors.State?.type === "required" && <span className="text-danger">  State is required</span>}
        </div>

        <div className="col-md-4">
          <label className="form-label">City</label>
          <select defaultValue={'DEFAULT'}
            {...register("city", { required: true, onChange: (e) => setSelectedCity(e.target.value) })}
            className="form-select"
            placeholder="City"
            value={selectedCity}
          // onBlur={(e) => }
          >
            <option value=''   >--Choose City--</option>
            {availableCities?.cities.map((e, key) => {
              return (
                <option value={e} key={key}>
                  {e}
                </option>
              );
            })}
          </select>
          {errors.city?.type === "required" && <span className="text-danger"> city is required</span>}
        </div>



        <button onClick={() => PrevousPage()} type="button" className='btn   btn-dark'>Prevous</button>
        <button onClick={()=>progress()} type="submit" className='btn btn-info' >Next</button>

      </form>










    </div>
  )
}

export default Address