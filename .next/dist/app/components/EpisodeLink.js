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
    className: 'jsx-811300675',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-811300675' + ' ' + 'rule',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_link2.default, { as: '/episode/' + props.id, href: '/episode?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-811300675',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-811300675',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title))), _react2.default.createElement('p', {
    className: 'jsx-811300675',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.text), _react2.default.createElement(_link2.default, { as: '/episode/' + props.id, href: '/episode?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-811300675',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Read more...')), _react2.default.createElement(_style2.default, {
    styleId: '811300675',
    css: 'li.jsx-811300675{display:inline-block;margin-top:56px;}.rule.jsx-811300675{width:70px;border-top:1px solid black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0VwaXNvZGVMaW5rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCTyxBQUdnQyxBQUtWLFdBQ2dCLFVBTFgsZ0JBQ2xCLENBS0EiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvRXBpc29kZUxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBFcGlzb2RlTGluayA9IHByb3BzID0+IChcbiAgPGxpPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZVwiIC8+XG5cbiAgICA8TGluayBhcz17YC9lcGlzb2RlLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9lcGlzb2RlP3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4gICAgICA8aDE+PGE+e3Byb3BzLnRpdGxlfTwvYT48L2gxPlxuICAgIDwvTGluaz5cblxuICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cblxuICAgIDxMaW5rIGFzPXtgL2VwaXNvZGUvJHtwcm9wcy5pZH1gfSBocmVmPXtgL2VwaXNvZGU/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbiAgICAgIDxhPlJlYWQgbW9yZS4uLjwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PVwidHJ1ZVwiPlxuICAgICAge2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJ1bGUge1xuICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuRXBpc29kZUxpbmsucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlTGluaztcbiJdfQ== */\n/*@ sourceURL=app/components/EpisodeLink.js */'
  }));
};

EpisodeLink.propTypes = {
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired
};

exports.default = EpisodeLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0VwaXNvZGVMaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJQcm9wVHlwZXMiLCJFcGlzb2RlTGluayIsInByb3BzIiwiaWQiLCJ0aXRsZSIsInRleHQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGNBQWMsU0FBZCxBQUFjLG1CQUFBO3lCQUNsQixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUE7dUNBQ0UsQUFBZTs7Z0JBQWY7a0JBREYsQUFDRSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxBQUFDLGdDQUFLLGtCQUFnQixNQUF0QixBQUE0QixJQUFNLDBCQUF3QixNQUExRCxBQUFnRTtnQkFBaEU7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEscUJBQUksY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUpSLEFBR0UsQUFDRSxBQUFJLEFBQVUsQUFHaEIsMEJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxXQVBGLEFBT0UsQUFBVSxBQUVWLHVCQUFBLEFBQUMsZ0NBQUssa0JBQWdCLE1BQXRCLEFBQTRCLElBQU0sMEJBQXdCLE1BQTFELEFBQWdFO2dCQUFoRTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FWSixBQVNFLEFBQ0U7YUFWSjtTQURrQixBQUNsQjtBQUFBO0FBREY7O0FBOEJBLFlBQUEsQUFBWTtNQUNOLG9CQUFBLEFBQVUsT0FEUSxBQUNELEFBQ3JCO1NBQU8sb0JBQUEsQUFBVSxPQUZLLEFBRUUsQUFDeEI7UUFBTSxvQkFBQSxBQUFVLE9BSGxCLEFBQXdCLEFBR0MsQUFHekI7QUFOd0IsQUFDdEI7O2tCQUtGLEFBQWUiLCJmaWxlIjoiRXBpc29kZUxpbmsuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCJ9