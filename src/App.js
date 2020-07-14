import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";


class App extends Component {
    constructor(){
        super()
        this.state = {
            car: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({ car: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredCar = this.state.car.filter(car => {
            return car.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });

        if (this.state.car.length === 0) {
            return <h1>Loading!</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Cars & Robots!</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList car = { filteredCar } />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;