import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {

    const navigator = useNavigate();
    function changeHandler() {
        navigator("/about")
    }

    return (
        <div>
           
            <h1>Home Page</h1><br></br>

            <button onClick={changeHandler}>Go To About Page</button></div>

    )
}

export default Home;