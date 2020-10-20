import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import './mountain-page.scss';
import GalleryInfo from 'Components/gallery-info/gallery-info';
import GalleryCarousel from 'Components/gallery-carousel/gallery-carousel';
import MOUNTAINS from '~/js/pages/mountain-page/mountain-data';

class MountainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: false,
    };
  }

  toggleFullScreen = () => this.setState((state) => ({ fullscreen: !state.fullscreen }))

  render() {
    const { fullscreen } = this.state;

    const { match: { path }, location: { pathname } } = this.props;

    const mountainWanted = MOUNTAINS.filter((mountain) => mountain.nameEng === pathname.replace(path, ''))[0];

    const { nameRus, info, photos } = mountainWanted;

    return pug`
      .mountain-page
        CSSTransition(in=fullscreen timeout=500 classNames="gallery")
          GalleryCarousel(slides=photos toggleFullScreen=this.toggleFullScreen, fullscreen=fullscreen).carousel
          
        CSSTransition(in=!fullscreen timeout=300 classNames="info")
          .info
            GalleryInfo(name=nameRus info=info)
  `;
  }
}
MountainPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(MountainPage);
