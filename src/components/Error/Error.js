import React from 'react'
import error from '../../assets/images/error.gif'

const Error = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <img src={error} alt="Page Not Found"/>
        </div>
    )
}

export default Error
