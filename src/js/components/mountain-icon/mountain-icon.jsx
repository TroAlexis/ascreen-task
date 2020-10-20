import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './mountain-icon.scss';

const MountainIcon = ({
  nameEng, nameRus, labelSize, className,
}) => pug`
  Link(to="/mountains/"+nameEng).mountain-icon(className=className)
    img.icon(src=require('Images/mountain-icons/'+nameEng+'.png'))
    .label(className=labelSize)
      span.label__title=nameRus
  `;

MountainIcon.propTypes = {
  nameEng: PropTypes.string,
  nameRus: PropTypes.string,
  labelSize: PropTypes.string,
  className: PropTypes.string,
};

export default MountainIcon;
