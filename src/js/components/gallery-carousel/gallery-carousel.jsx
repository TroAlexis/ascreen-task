import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './gallery-carousel.scss';

class GalleryCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
      fullscreen: false,
    };
  }

  setCurrentSlide = (num) => this.setState({ currentSlide: num })

  render() {
    const {
      slides, className, toggleFullScreen, fullscreen,
    } = this.props;
    const { currentSlide } = this.state;

    return pug`
      .gallery-carousel(className=className)
        .gallery-carousel__wrapper
          .slides
            each slide,index in slides
              - const { url, alt } = slide;
              img(src=require('Images/mountain-photos/' + url + '.jpg') alt=alt styleName=currentSlide===index? "active": "" key=index)
              
          .controls
            Link.controls__back(to="/ascreen-task/")
            .controls__thumbs
              each slide, index in slides
                span.controls__thumb(styleName=currentSlide===index? "active": "" onClick=() => this.setCurrentSlide(index) key=index)
                
            .controls__fullscreen(onClick=toggleFullScreen styleName=fullscreen? "fullscreen-open": "")
    `;
  }
}

export default GalleryCarousel;

GalleryCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  toggleFullScreen: PropTypes.func.isRequired,
};

GalleryCarousel.defaultProps = {
  className: '',
};
