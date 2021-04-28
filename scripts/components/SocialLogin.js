import React, { useState, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';

const SocialLogin = () =>{

    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <>
            <h1>social login</h1>
            <GoogleLogin
                clientId="493941388398-gplfu9nkmvv6dr0sb8olt7n54ffle1qt.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    )
}

export default SocialLogin;