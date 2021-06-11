import React from 'react';

const MovieDetails = () =>{
    return(
        <div>
            <h2>Movie Description</h2>
            <p>Movie Name: weekend at bernies</p>
            <p>Type: Comedy</p>
            <p>Age: +15</p>

            <h2>Trailer</h2>
             <video width={320} height={240} controls></video>

              <source src="myVideo.mp4" type="Trailer" ></source>


        </div>
    )
}

export default MovieDetails;