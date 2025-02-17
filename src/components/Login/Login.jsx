

import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// import { jwtDecode } from "jwt-decode";// Corrected import for jwt-decode
import './Login.css';

const Login = () => {
    const [credential, setCredential] = useState(null);
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Ensure the clientId is loaded correctly

    const handleLoginSuccess = (credentialResponse) => {
        console.log(credentialResponse);

        // Send the credential to the backend using axios
        axios.post('http://localhost:3000/admin-auth/register',{ token: credentialResponse.credential })
            .then(response => {
            console.log('Successfully sent to backend:', response.data);
            localStorage.setItem('authToken', credentialResponse.credential);
            setCredential(response.data);
            window.location.replace('/dashboard');
            })
            .catch(error => {
            console.error('Error sending to backend:', error);
            });
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div>
                <h1>Login with Google</h1>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
