/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockContent, BlockData, BlockInput, CommonBlock} = MegadraftPlugin;


export default class Block extends Component {
  constructor(props) {
    super(props);

    this.actions = [
      {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
      {"key": "delete", "icon": MegadraftIcons.DeleteIcon, "action": this.props.container.remove}
    ];
  }

  _handleEdit = () => {
    alert(JSON.stringify(this.props.data, null, 4));
  }

  _handleCaptionChange = (event) => {
    this.props.container.updateData({caption: event.target.value});
  }

  render(){
    return (
      <div>
        <input />
        <hr />
      </div>
    );
  }
}
