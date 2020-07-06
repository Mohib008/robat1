import React from "react";
import Card from "./Card";


const cardList = ({ car }) => {
    return (
        <div>
        <Card id={car[0].id} name={car[0].name} email={car[0].email} />
        <Card id={car[1].id} name={car[1].name} email={car[1].email} />
        <Card id={car[2].id} name={car[2].name} email={car[2].email} />
        <Card id={car[3].id} name={car[3].name} email={car[3].email} /> 
     </div>
    );
}

export default cardList;