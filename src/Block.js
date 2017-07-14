/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";
import { StyleSheet, css } from 'aphrodite';

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
      <div className={css(styles.titleBlock)}>
        <input placeholder="Section Title..." className={css(styles.input)} onChange={this._handleCaptionChange} />
        <hr />
      </div>
    );
  }
}

var styles = StyleSheet.create({
  titleBlock: {

  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '2em',
    width: '100%',
    textAlign: 'center',
  }
})