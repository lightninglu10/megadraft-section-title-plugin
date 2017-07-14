/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

import {MegadraftIcons} from "megadraft";

import Button from "./Button";
import Block from "./Block";
import constants from "./constants";


export default {
  title: constants.PLUGIN_NAME,
  type: constants.PLUGIN_TYPE,
  buttonComponent: Button,
  blockComponent: Block,
  options: {
    defaultDisplay: "center",
    displayOptions: [
      {"key": "center", "icon": MegadraftIcons.MediaSmallIcon, "label": "LEFT"},
      {"key": "left", "icon": MegadraftIcons.MediaMediumIcon, "label": "CENTER"},
      {"key": "right", "icon": MegadraftIcons.MediaBigIcon, "label": "RIGHT"}
    ]
  }
};
