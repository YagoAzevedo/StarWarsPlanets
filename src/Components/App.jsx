import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Logo from './Logo'
import PlanetInfo from './PlanetInfo'
import Loading from './Loading'

const initialState = {
  id: 1,
  active: false,
  loading: false,
  data: [],
  filmsCount: 0
}

const url = 'https://swapi.co/api/planets';

export default class App extends Component {
  state = { ...initialState };

  startGame() {
    this.setState({ active: true, loading: true });
    axios.get(`${url}/${this.state.id}`).then(response => {
      this.setState({
          loading: false,
          data: response.data,
          filmsCount: response.data.films.length
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  nextPlanet() {
    // the saga contains 61 planets
    let newId = this.state.id < 61 ? this.state.id + 1 : 1;
    this.setState({ id: newId, data: [] }, () => { this.startGame() });
  }

  render () {
    const startGame = () => this.startGame()
    const nextPlanet = () => this.nextPlanet()
    return (
      <div className="App">
        <Logo />
        <div className="card">
          <Loading show={this.state.loading} />
          <div className={this.state.active ? 'hidden' : 'pointer'}>
            <h1 onClick={startGame}>
              Click here to start
            </h1>
          </div>
          <PlanetInfo show={this.state.active && !this.state.loading} 
                      data={this.state.data}
                      filmsCount={this.state.filmsCount}/>
        </div>
        <button className={!this.state.active ? 'hidden' : ' btn-next'}
                onClick={nextPlanet}>
          NEXT
        </button>
      </div>
    );
  }
}
