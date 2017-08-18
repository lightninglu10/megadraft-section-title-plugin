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
        {this.props.blockProps.getInitialReadOnly()
          ?   <a className={css(styles.link)} name={this.props.data.sectionTitle.replace(new RegExp(' ', 'g'), '_')}>
                <div className={css(styles.title)}>
                  { this.props.data.sectionTitle }
                </div>
              </a>
          :   <div className={css(styles.inputWrapper)}>
                <div className={css(styles.inputLabel)}> <span className={css(styles.inputText)}>Section Title </span></div>
                <input value={this.props.data.sectionTitle} placeholder="Start Typing..." className={css(styles.input)} onChange={this._handleCaptionChange} />
              </div>
        }
      </div>
    );
  }
}

var styles = StyleSheet.create({
  link: {
    textDecoration: 'none',
  },
  titleBlock: {
    paddingBottom: '14px',
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
    fontFamily: 'Roboto',
    color: '#3C394C',
  },
  inputWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  inputLabel: {
    borderRight: '1px solid #979797',
    width: '50px',
    textAlign: 'right',
    fontSize: '12px',
    fontFamily: 'Roboto',
    padding: '3px',
    lineHeight: '16px',
  },
  inputText: {
    opacity: '.8',
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '24px',
    paddingLeft: '15px',
    flex: 1,
  },

  title: {
    fontSize: '24px',
    fontWeight: '500',
  },
})