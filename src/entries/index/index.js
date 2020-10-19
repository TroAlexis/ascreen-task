// WEBPACK ENTRY FILE MAIN
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'Scss/global.scss';

// JS here
import App from 'Components/App/App';

// SCSS

const wrapper = document.querySelector('.root');
ReactDOM.render(pug`
  BrowserRouter
    App
`, wrapper);

if (module.hot) {
  module.hot.accept();
}
