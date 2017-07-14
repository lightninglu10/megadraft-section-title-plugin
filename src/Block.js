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
    this.props.container.updateData({sectionTitle: event.target.value});
  }

  render() {
    return (
      <div className={css(styles.titleBlock)}>
        {this.props.blockProps.getReadOnly()
          ?   <div> { this.props.data.sectionTitle } </div>
          :   <input placeholder="Section Title..." className={css(styles.input)} onChange={this._handleCaptionChange} />
        }
      </div>
    );
  }
}

var styles = StyleSheet.create({
  titleBlock: {
    paddingBottom: '14px',
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
    fontFamily: 'Roboto',
    color: '#3C394C',
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '24px',
    width: '100%',
  },

  title: {
    fontSize: '24px',
  },
})