import React from 'react';
import ReactDOM from 'react-dom';
import PlanetInfo from './PlanetInfo';

const mock = {
    name: 'planet test',
    population: 500,
    climate: 'cold',
    terrain: 'snow'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlanetInfo show={true}
                              data={mock}
                              filmsCount={3}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
