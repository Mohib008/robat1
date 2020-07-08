import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { car } from "./car";
import "./App.css";


class App extends Component {
    constructor(){
        super()
        this.state = {
            car: car,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredCar = this.state.car.filter(car => {
            return car.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });

        return (
            <div className="tc">
                <h1 className="f1">Cars & Robots!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList car = { filteredCar } />
            </div>
        );
    }
}

export default App;