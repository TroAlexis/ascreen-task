import React from 'react';
// import PropTypes from 'prop-types';

import './gallery-info.scss';

const GalleryInfo = ({ title, info }) => pug`
    section.gallery-info
      h1.title=title
      article.article
        each paragraph in info
          p.article__paragraph=paragraph
`;

// gallery-info.propTypes = {}

export default GalleryInfo;
