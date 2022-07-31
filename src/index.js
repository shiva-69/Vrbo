import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthContextProvider } from './Components/context/authContext';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthContextProvider>
        <GoogleOAuthProvider clientId='524266368211-cvp7frjeg3bmubg3rokhsl139skj1mbr.apps.googleusercontent.com'>
        <Provider store={store} >
            <App />
        </Provider>
        </GoogleOAuthProvider>
        </AuthContextProvider>
    </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

