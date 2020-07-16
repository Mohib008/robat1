import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";

import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField } from "../action";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            car: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({ car: users}));
    }

    render() {
        const { car } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredCar = car.filter(car => {
            return car.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        });

        return !car.length ?
           <h1>Loading!</h1>:
           (
                <div className="tc">
                    <h1 className="f1">Cars & Robots!</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    <CardList car = { filteredCar } />
                    </Scroll>
                </div>
            );
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);