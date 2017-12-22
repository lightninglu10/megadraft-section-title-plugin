"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    BlockData = _megadraft.MegadraftPlugin.BlockData,
    BlockInput = _megadraft.MegadraftPlugin.BlockInput,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this._handleEdit = function () {
      alert(JSON.stringify(_this.props.data, null, 4));
    };

    _this._handleCaptionChange = function (event) {
      _this.props.container.updateData({ sectionTitle: event.target.value });
    };

    _this.actions = [{ "key": "edit", "icon": _megadraft.MegadraftIcons.EditIcon, "action": _this._handleEdit }, { "key": "delete", "icon": _megadraft.MegadraftIcons.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: (0, _aphrodite.css)(styles.titleBlock) },
        this.props.blockProps.getInitialReadOnly() ? _react2.default.createElement(
          "a",
          { className: (0, _aphrodite.css)(styles.link), name: this.props.data.sectionTitle ? this.props.data.sectionTitle.replace(new RegExp(' ', 'g'), '_') : '' },
          _react2.default.createElement(
            "div",
            { className: (0, _aphrodite.css)(styles.title) },
            this.props.data.sectionTitle
          )
        ) : _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(styles.inputWrapper) },
          _react2.default.createElement(
            "div",
            { className: (0, _aphrodite.css)(styles.inputLabel) },
            " ",
            _react2.default.createElement(
              "span",
              { className: (0, _aphrodite.css)(styles.inputText) },
              "Section Title "
            )
          ),
          _react2.default.createElement("input", { value: this.props.data.sectionTitle, placeholder: "Start Typing...", className: (0, _aphrodite.css)(styles.input), onChange: this._handleCaptionChange })
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;


var styles = _aphrodite.StyleSheet.create({
  link: {
    textDecoration: 'none'
  },
  titleBlock: {
    paddingBottom: '14px',
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
    fontFamily: 'Roboto',
    color: '#3C394C'
  },
  inputWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  inputLabel: {
    borderRight: '1px solid #979797',
    width: '50px',
    textAlign: 'right',
    fontSize: '12px',
    fontFamily: 'Roboto',
    padding: '3px',
    lineHeight: '16px'
  },
  inputText: {
    opacity: '.8'
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '24px',
    paddingLeft: '15px',
    flex: 1
  },

  title: {
    fontSize: '24px',
    fontWeight: '500'
  }
});