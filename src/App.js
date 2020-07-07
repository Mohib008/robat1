import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { car } from "./car";


class App extends Component {
    constructor(){
        super()
        this.state = {
            car: car,
            searchfield: ""
        }
    }

    onSearchChange(event){
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="tc">
                <h1>Cars & Robots!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList car = {this.state.car} />
            </div>
        );
    }
}

export default App;