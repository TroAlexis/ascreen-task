import React from 'react';
import PropTypes from 'prop-types';

import CustomScrollbar from 'Components/custom-scrollbar/custom-scrollbar';
import { ReactComponent as ScrollIcon } from 'Images/ui-icons/scroll-icon.svg';
import { ReactComponent as ScrollIconFull } from 'Images/ui-icons/scroll-icon-full.svg';

import './gallery-info.scss';

class GalleryInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
    };
  }

  handleScroll = (values) => {
    const { top } = values;
    this.setState({ top });
  }

  render() {
    const {
      name, info, className,
    } = this.props;
    const { top } = this.state;
    const currentPosition = Math.round(top * 100);

    return pug`
      section.gallery-info(className=className)
        h1.title=name
        CustomScrollbar(style={height: 610} onUpdate=this.handleScroll)
          each paragraph,index in info
            p.article__paragraph(key=index)=paragraph
            
      .scroll-icons
        - const numOfIcons = [0,1,2,3,4,5,6,7];
        each num in numOfIcons
          - const key = 'icon'+num
          if currentPosition >= (num/numOfIcons.length*100)
            ScrollIconFull(key=key)
            
          else
            ScrollIcon(key=key)
`;
  }
}

GalleryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

GalleryInfo.defaultProps = {
  className: '',
};

export default GalleryInfo;
