import React from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigator = useNavigate();
    function changeHandler() {
        navigator("/")
    }
    return (
        <div> <h1>Page Not Found</h1><br></br>
            <button onClick={changeHandler}>Go To Home Page</button></div>

    )

}

export default NotFound;