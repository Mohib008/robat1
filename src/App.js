import React from "react";
import CardList from "./cardList";
import SearchBox from "./SearchBox";
import { car } from "./car";

const App = () => {
    return (
        <div className="tc">
          <h1>Cars & Robots!</h1>
          <SearchBox />
          <CardList car={car}/>
        </div>
       
    )
}

export default App;