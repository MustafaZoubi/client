import React, { useContext } from 'react'
import { useOutletContext } from 'react-router'

function Overview() {
    const message = useOutletContext()
    return (
        <>
            <div>Overview</div>
            <div>{message}</div>
        </>

    )
}

export default Overview