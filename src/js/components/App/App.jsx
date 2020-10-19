import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '~/js/pages/homepage/homepage';
import MountainPage from '~/js/pages/mountain-page/mountain-page';

import './App.scss';

export default class App extends React.Component {
  render() {
    return pug`
      Switch
        Route(exact path="/" component=HomePage)
          
        Route(path="/mountains/" render=${(props) => pug`MountainPage(...props)`})
    `;
  }
}
