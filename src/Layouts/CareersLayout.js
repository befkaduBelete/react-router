import React from 'react'
import { Outlet } from 'react-router-dom'

function CareersLayout() {
    return (
        <div className='careers-layout'>
            <h1>Careers</h1>
            <p>Befkadu Belete Frew</p>
            <Outlet />

        </div>
    )
}

export default CareersLayout
