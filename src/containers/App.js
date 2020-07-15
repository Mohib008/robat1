import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";


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
        const { car, searchfield } = this.state;
        const filteredCar = car.filter(car => {
            return car.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        });

        return !car.length ?
           <h1>Loading!</h1>:
           (
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

export default App;