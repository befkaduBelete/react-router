import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function CareersError() {
    const error = useRouteError()
    return (
        <div className='careers-error'>
            <h1>Error</h1>
            <p>{error.message}This data is not found</p>
            <Link to="/"> Back to Home</Link>

        </div>
    )
}

