import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
// import UserContext from './Context/UserContext.jsx';

//context


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
 
            <App />
       
    </BrowserRouter>
)
