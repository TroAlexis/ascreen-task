import React from 'react';
// import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import './custom-scrollbar.scss';

export default class CustomScrollbar extends React.Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      top: 0,
    };
  }

  handleUpdate = (values) => {
    const { top } = values;
    this.setState({ top });
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      width: '7px',
      backgroundColor: '#87B0BA',
    };
    return (
      <div
        {...props}
        style={{ ...style, ...thumbStyle }}
      />
    );
  }

  renderTrackVertical = ({ style, ...props }) => {
    const trackStyle = {
      backgroundColor: '#1C5681',
    };
    return (
      <div
        {...props}
        style={{ ...style, ...trackStyle }}
      />
    );
  }

  renderView = ({ style, ...props }) => {
    const viewStyle = {
      paddingRight: 100,
    };
    return (
      <div
        className="box"
        style={{ ...style, ...viewStyle }}
        {...props}
      />
    );
  }

  render() {
    return (
      <Scrollbars
        thumbSize={143}
        renderView={this.renderView}
        renderThumbVertical={this.renderThumb}
        // renderTrackVertical={({ style, ...props }) => <div {...props} style={{ ...style, backgroundColor: '#1C5681' }} />}
        {...this.props}
      />
    );
  }
}

// custom-scrollbar.propTypes = {}
