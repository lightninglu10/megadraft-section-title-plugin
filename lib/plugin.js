"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _megadraft = require("megadraft");

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _Block = require("./Block");

var _Block2 = _interopRequireDefault(_Block);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

exports.default = {
  title: _constants2.default.PLUGIN_NAME,
  type: _constants2.default.PLUGIN_TYPE,
  buttonComponent: _Button2.default,
  blockComponent: _Block2.default,
  options: {
    defaultDisplay: "center",
    displayOptions: [{ "key": "center", "icon": _megadraft.MegadraftIcons.MediaSmallIcon, "label": "LEFT" }, { "key": "left", "icon": _megadraft.MegadraftIcons.MediaMediumIcon, "label": "CENTER" }, { "key": "right", "icon": _megadraft.MegadraftIcons.MediaBigIcon, "label": "RIGHT" }]
  }
};