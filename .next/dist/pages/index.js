'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = require('../app/components/Layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/pages/index.js?entry';


var EpisodeLink = function EpisodeLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { as: '/episode/' + props.id, href: '/episode?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.title)));
};

var index = function index() {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Well Technically'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(EpisodeLink, { id: 'episode1', title: 'Lorem Ipsum Episode Foo', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(EpisodeLink, { id: 'episode2', title: 'Lorem Ipsum Episode Bar', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(EpisodeLink, { id: 'episode3', title: 'Lorem Ipsum Episode Baz', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })));
};

EpisodeLink.propTypes = {
  id: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired
};

exports.default = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJQcm9wVHlwZXMiLCJMYXlvdXQiLCJFcGlzb2RlTGluayIsInByb3BzIiwiaWQiLCJ0aXRsZSIsImluZGV4IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFHbkIsSUFBTSxjQUFjLFNBQWQsQUFBYyxtQkFBQTt5QkFDbEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGdDQUFLLGtCQUFnQixNQUF0QixBQUE0QixJQUFNLDBCQUF3QixNQUExRCxBQUFnRTtnQkFBaEU7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFdBSGMsQUFDbEIsQUFDRSxBQUNFLEFBQVU7QUFIaEI7O0FBUUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxRQUFBO3lCQUNaLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLHFDQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLG1DQUNFLEFBQUMsZUFBWSxJQUFiLEFBQWdCLFlBQVcsT0FBM0IsQUFBaUM7Z0JBQWpDO2tCQURGLEFBQ0UsQUFDQTtBQURBO29DQUNBLEFBQUMsZUFBWSxJQUFiLEFBQWdCLFlBQVcsT0FBM0IsQUFBaUM7Z0JBQWpDO2tCQUZGLEFBRUUsQUFDQTtBQURBO29DQUNBLEFBQUMsZUFBWSxJQUFiLEFBQWdCLFlBQVcsT0FBM0IsQUFBaUM7Z0JBQWpDO2tCQU5RLEFBQ1osQUFFRSxBQUdFO0FBQUE7O0FBTk47O0FBV0EsWUFBQSxBQUFZO01BQ04sb0JBQUEsQUFBVSxPQURRLEFBQ0QsQUFDckI7U0FBTyxvQkFBQSxBQUFVLE9BRm5CLEFBQXdCLEFBRUUsQUFHMUI7QUFMd0IsQUFDdEI7O2tCQUlGLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCJ9