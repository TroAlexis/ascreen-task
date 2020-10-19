import React from 'react';
// import PropTypes from 'prop-types';

import './mountain-page.scss';
import GalleryInfo from 'Components/gallery-info/gallery-info';
import GalleryCarousel from 'Components/gallery-carousel/gallery-carousel';
import MOUNTAINS from '~/js/pages/mountain-page/mountain-data';

const MountainPage = ({ match: { path }, location: { pathname } }) => {
  const mountainWanted = MOUNTAINS[pathname.replace(path, '')];
  const { title, info, photos } = mountainWanted;

  return pug`
    .mountain-page
      GalleryCarousel(slides=photos)
      GalleryInfo(title=title info=info)
  `;
};

// mountain-page.propTypes = {}

export default MountainPage;
