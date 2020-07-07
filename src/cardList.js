import React from "react";
import Card from "./Card";

const CardList = ({ car }) => {
    return (
        <div>
          { 
            car.map((user, i) => {
            return <Card key={i} id={car[i].id} name={car[i].name} email={car[i].email} />
           })  
          }
        </div>
    );
}

export default CardList;