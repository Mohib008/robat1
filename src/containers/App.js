import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox";

import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField, requestCar } from "../action";

const mapStateToProps = state => {
    return {
        searchField: state.searchCar.searchField,
        car: state.requestCar.car,
        isPinding: state.requestCar.isPinding,
        error: state.requestCar.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestCar: () => dispatch(requestCar())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestCar();
    }

    render() {
        const { searchField, onSearchChange, car, isPinding } = this.props;
        const filteredCar = car.filter(car => {
            return car.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        });

        return isPinding ?
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