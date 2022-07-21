import React from 'react'
import { useSelector } from 'react-redux'
import { Link,NavLink } from 'react-router-dom'
import { RootState } from '../interface/models'

function Tabs() {

    const previousData = useSelector((state: {enableTab:{
        enableTab_1:boolean
        enableTab_2:boolean
        enableTab_3:boolean
        enableTab_4:boolean
        enableTab_5:boolean
    }}) => {
        return state?.enableTab
    })

    

    return (
        <div>
            <ul className="nav justify-content-center nav-tabs">

                <li className="nav-item">
                    <NavLink className={"nav-link text-dark  "+ (previousData.enableTab_1 ? '' : 'disabled')
                    }
                    aria-current="page" to={'/BasicInformation'}>Basicformation</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className={"nav-link text-dark  " + (previousData.enableTab_2 ? '' : 'disabled')}
                    to={'/EmployeeInformation'}>Information</NavLink>
                </li>

                <li className="nav-item">
                    
                    <NavLink className={"nav-link text-dark  " + (previousData.enableTab_3 ? '' : 'disabled')}
                    to={'/Address'}>Address</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className={"nav-link text-dark  " + (previousData.enableTab_4 ? '' : 'disabled')}
                    to={'/Generalinfo'}>General info</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className={"nav-link text-dark  " + (previousData.enableTab_5? '' : 'disabled')}
                    to={'/Projects'}>Projects</NavLink>
                </li>
            </ul>

        </div >
    )
}

export default Tabs