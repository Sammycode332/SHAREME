import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './App.jsx';

const GOOGLE_CLIENT_ID = '410643880064-r15iuuocde6lu1eqtqlb03ach0fshff7.apps.googleusercontent.com'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} auto_select={false}>

            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);