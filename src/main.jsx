import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloWorldApp} from './HelloWorldApp.jsx';
import {FirstApp} from "./FirstApp.jsx";
import {CounterApp} from "./CounterApp.jsx";
import './style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola, Soy Vegeta"/>
        <HelloWorldApp/>
        <CounterApp value={0}/>
    </React.StrictMode>
)

