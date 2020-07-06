import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import "tachyons";
import { car } from "./car";

ReactDOM.render(
                <div>
                   <Card id={car[0].id} name={car[0].name} email={car[0].email} />
                   <Card id={car[1].id} name={car[1].name} email={car[1].email} />
                   <Card id={car[2].id} name={car[2].name} email={car[2].email} />
                   <Card id={car[3].id} name={car[3].name} email={car[3].email} /> 
                </div>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
