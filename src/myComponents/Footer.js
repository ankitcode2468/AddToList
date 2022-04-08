import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"relative",
        top:"0vh",
        width:"100%",
        

    }
    // style={footerstyle}
    return (
        <footer className="bg-dark text-light py-1 my-3"  >
            <p className="text-center">
            Copyright &copy; My TodosList.com
            </p>
           
        </footer>
    )
}
