import React from "react";
import Card from "./Card";

const cardList = ({ car }) => {
const cardComponent = car.map((user, i) => {
    return <Card key={i} id={car[i].id} name={car[i].name} email={car[i].email} />
})
    return (
        <div>
         { cardComponent}
        </div>
    );
}

export default cardList;