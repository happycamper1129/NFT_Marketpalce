import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom'

const Logout = ({logout}) => {

    useEffect(() => {
        logout()
        window.location.reload()
    })

    return <Navigate to="/"/>
};

export default Logout;