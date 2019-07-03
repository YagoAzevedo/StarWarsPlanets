import React from 'react'
import './PlanetInfo.css'

export default props =>
    <div className={props.show ? '' : 'hidden'}>
        <h1 className="planet-name">{props.data.name}</h1>
        <div className="planet-info">Population: {props.data.population}</div>
        <div className="planet-info">Climate: {props.data.climate}</div>
        <div className="planet-info">Terrain: {props.data.terrain}</div>
        <div className="qt-films">Featured in {props.filmsCount} films</div>
    </div>