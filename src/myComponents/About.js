import React from 'react'
import pic from "./pic.jpg";

export const About = () => {

    let css = {
        position: "relative",
        height: "100vh",
        width: "100%",
    }
    let ft={
        fontSize:"4rem",
    }
    return (
        <>
            <div className="card bg-dark text-white">
                <img src={pic} class="card-img " style={css} alt="GD" />
                <div className="card-img-overlay">

                    <p className="card-text text-center" style={ft}>We are team of web developer and working hard to provide best service to you.</p>

                </div>
            </div>
        </>
    )
}
