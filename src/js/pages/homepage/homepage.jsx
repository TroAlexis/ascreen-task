import React from 'react';

import './homepage.scss';
import MountainIcon from 'Components/mountain-icon/mountain-icon';

import MOUNTAINS from '~/js/pages/mountain-page/mountain-data';

const HomePage = () => pug`
  .homepage
    each mountain, index in MOUNTAINS
      - const { info, photos, nameEng, ...mountainProps } = mountain;
      MountainIcon(key=index, styleName=nameEng, nameEng=nameEng, ...mountainProps).mountain
`;

export default HomePage;
