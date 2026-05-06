
import React from "react";

function About( { image, about } ){

    let logo = image !== undefined ? image : "https://via.placeholder.com/215"

    return (

        <>
            <aside>

                <img src={logo} alt='blog logo'/>
                
                <p>{about}</p>

            </aside>
        </>

    )

}

export default About;