import React from 'react';
// import PropTypes from 'prop-types';

import './mountain-icon.scss';

const MountainIcon = ({
  imageUrl, name, labelSize, className,
}) => pug`
  .mountain-icon(className=className)
    img.icon(src=require('Images/mountain-icons/'+imageUrl+'.png'))
    .label(className=labelSize)
      span.label__title=name
  `;

// mountain-icon.propTypes = {}

export default MountainIcon;
