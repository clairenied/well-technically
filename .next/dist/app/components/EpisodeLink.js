'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/app/components/EpisodeLink.js';


var EpisodeLink = function EpisodeLink(props) {
  return _react2.default.createElement('li', {
    className: 'jsx-2940601580',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { as: '/episode/' + props.id, href: '/episode?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-2940601580',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-2940601580',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title))), _react2.default.createElement('p', {
    className: 'jsx-2940601580',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.text), _react2.default.createElement(_style2.default, {
    styleId: '2940601580',
    css: 'li.jsx-2940601580{margin-top:56px;border-left:1px solid black;padding:0 28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0VwaXNvZGVMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlPLEFBRzJCLGdCQUNZLDRCQUNiLGVBQ2pCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0VwaXNvZGVMaW5rLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jbGFpcmVuaWVkZXJiZXJnZXIvcmVwb3Mvd3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXBpc29kZUxpbmsgPSBwcm9wcyA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9lcGlzb2RlLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9lcGlzb2RlP3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4gICAgICA8aDE+PGE+e3Byb3BzLnRpdGxlfTwvYT48L2gxPlxuICAgIDwvTGluaz5cblxuICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cblxuICAgIDxzdHlsZSBqc3g9XCJ0cnVlXCI+XG4gICAgICB7YFxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuRXBpc29kZUxpbmsucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlTGluaztcbiJdfQ== */\n/*@ sourceURL=app/components/EpisodeLink.js */'
  }));
};

EpisodeLink.propTypes = {
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired
};

exports.default = EpisodeLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0VwaXNvZGVMaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJQcm9wVHlwZXMiLCJFcGlzb2RlTGluayIsInByb3BzIiwiaWQiLCJ0aXRsZSIsInRleHQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGNBQWMsU0FBZCxBQUFjLG1CQUFBO3lCQUNsQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxrQkFBZ0IsTUFBdEIsQUFBNEIsSUFBTSwwQkFBd0IsTUFBMUQsQUFBZ0U7Z0JBQWhFO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUFJLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FGUixBQUNFLEFBQ0UsQUFBSSxBQUFVLEFBR2hCLDBCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FMRixBQUtFLEFBQVU7YUFMWjtTQURrQixBQUNsQjtBQUFBO0FBREY7O0FBb0JBLFlBQUEsQUFBWTtNQUNOLG9CQUFBLEFBQVUsT0FEUSxBQUNELEFBQ3JCO1NBQU8sb0JBQUEsQUFBVSxPQUZLLEFBRUUsQUFDeEI7UUFBTSxvQkFBQSxBQUFVLE9BSGxCLEFBQXdCLEFBR0MsQUFHekI7QUFOd0IsQUFDdEI7O2tCQUtGLEFBQWUiLCJmaWxlIjoiRXBpc29kZUxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCJ9