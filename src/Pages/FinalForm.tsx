import React, { CSSProperties, useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../interface/models'
import { jsPDF } from "jspdf";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropagateLoader from "react-spinners/PropagateLoader"
import { Projects_ } from '../Actions/Action';


function FinalForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allDetails = useSelector((state: RootState) => {
        return state.currentUserData
    })

    const PrevousPage = () => {
        // dispatch(Projects_(allDetails.Step_5))
        navigate('/Projects')
    }
    const getPdf = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            let doc = new jsPDF("landscape", 'pt', 'A4');
            doc.html(document.getElementById('Details') as any, {
                callback: () => {
                    doc.save('test.pdf');
                }
            });
        }, 2000);

    }

    const  [loading, setLoading] = useState(false);

 

    return (
        <div id='Details' className='animate__animated animate__fadeIn' >

            <PropagateLoader color="#13bc57" className='spiner' loading={loading} size={20} />
            <h1 className='text Details mt-5'>Your All Details </h1>
            <div className="container ">

                {/* BasicInformation section */}

                <div id='BasicInformation' className="row ">
                    <h5 id='BasicInformation' className='mb-4' >BasicInformation</h5>
                    <div className="col">
                        <h5>firstName</h5>
                        {allDetails.Step_1?.firstName}
                    </div>
                    <div className="col">
                        <h5>LastName</h5>
                        {allDetails.Step_1?.LastName}
                    </div>
                    <div className="col">
                        <h5>Email</h5>
                        {allDetails.Step_1?.email}
                    </div>
                    <div className="col">
                        <h5>Age</h5>
                        {allDetails.Step_1?.Age}
                    </div>
                    <div className="col">
                        <h5>Gender</h5>
                        {allDetails.Step_1?.gender}
                    </div>

                </div>
            </div>
            <hr />

            {/* past information section  */}

            <div id='information' className="container ">
                <h5 className='mt-4 mb-4' >Your  information</h5>
                <div className="row">
                    <div className="col">
                        <h5>Past Role</h5>
                        {allDetails.Step_2?.pastRole}
                    </div>
                    <div className="col">
                        <h5>Previous Company</h5>
                        {allDetails.Step_2?.companyName}
                    </div>
                    <div className="col">
                        <h5>PhoneNumber</h5>
                        {allDetails.Step_2?.PhoneNumber}
                    </div>
                    <div className="col">
                        <h5>EmergencyContact</h5>
                        {allDetails.Step_2?.EmergencyContact}
                    </div>
                    <div className="col">
                        <h5>Learninginstitution</h5>
                        {allDetails.Step_2?.Learninginstitution}
                    </div>

                </div>
            </div>

            {/* Your Skills section ! */}
            <hr />
            <div id='Skills' className="container ">
                <h5 className='mt-4 mb-4' >Your Skills ! </h5>
                <div className="row">
                    <div className="col">
                        <h5>Language</h5>
                        {allDetails.Step_4?.Language.map((value: string) => {
                            return (
                                <>
                                    {value},
                                </>
                            )
                        })}
                    </div>
                    <div className="col mb-5">
                        <h5>frameworks</h5>
                        {allDetails.Step_4?.frameworks.map((value: string) => {
                            return (
                                <>
                                    {value},
                                </>
                            )
                        })}
                    </div>
                    <div className="col">
                        <h5>hobbies</h5>
                        {allDetails.Step_4?.hobbies.map((value: string) => {
                            return (
                                <>
                                    {value},
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <hr />

            {/* Projects  section */}

            <div id='Projects' className="container mt-5 ">
                <h5 className='mt-4 mb-4' >Projects</h5>
                <div className="row">
                    <div className="col">
                        <h6>Projects that you worked on</h6>
                        {allDetails.Step_5?.Projects}
                    </div>
                    <div className="col">
                        <h6>experience !</h6>
                        {allDetails.Step_5?.experience}
                    </div>
                    <div className="col">
                        <h6>Projects that you worked on</h6>
                        <>
                            {allDetails.Step_5.liveProjects}
                         </>
                    </div>
                </div>
            </div>

            {/* Your Address section */}

            <div id='Address' className="container ">
                <h5 className='mt-4 mb-4' >Your Address</h5>
                <div className="row">
                    <div className="col-12">
                        <h6>Address:</h6>
                        {allDetails.Step_3?.Address},
                        <h6>Address line 2:</h6>
                        {allDetails.Step_3?.Address2},
                        <h6></h6>{allDetails.Step_3?.Country},
                        State-{allDetails.Step_3?.State},
                        city-{allDetails.Step_3?.city},
                    </div>
                </div>
            </div>


            <button onClick={() => PrevousPage()} type="button" className='btn min mt-5 btn-dark'>Prevous</button>
            <button onClick={() => getPdf()} type="submit" className='btn mt-5 min btn-info' >Generate pdf</button>
        </div>
    )
}

export default FinalForm