/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

import React from "react";

import FaHeader from 'react-icons/lib/fa/header';

export default class extends React.Component {
  render() {
    return (
      <FaHeader width="18" height="18" {...this.props} style={{position: 'absolute', 'left': '50%', top: '25%', transform: 'translate(-50%)'}}/>
    );
  }
}
