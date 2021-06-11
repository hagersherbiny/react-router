import React from 'react';



const Nav = () =>{
    return(
        <div className="navbar">
            <div className= "container">
                <a href= "#" className= "about">about</a>
                <ul>
                    <a href="/">Home</a>
                    <a href="/MovieDetails">Movie Details</a>

                </ul>
            </div>
            
        </div>
    )
}

export default Nav;