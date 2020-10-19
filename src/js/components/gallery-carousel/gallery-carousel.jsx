import React from 'react';
// import PropTypes from 'prop-types';

import './gallery-carousel.scss';

class GalleryCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;

    return pug`
      .gallery-carousel
        .gallery-carousel__wrapper
          .slides
            each slide in slides
              - const { url, alt } = slide;
              img(src=require('Images/mountain-photos/' + url + '.png') alt=alt)
              
          .controls
            .controls__back
            .controls__thumbs
              each slide, index in slides
                span.controls__thumb(styleName=currentSlide===index? 'active': '')
                
            .controls__fullscreen
    `;
  }
}

export default GalleryCarousel;
// gallery-carousel.propTypes = {}
