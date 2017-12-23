'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = require('../app/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/pages/episode.js?entry';


var episode = function episode(props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.url.query.title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Lorem ipsum woo'));
};

episode.propTypes = {
  url: _propTypes2.default.shape({
    query: _propTypes2.default.shape({
      title: _propTypes2.default.string.isRequired
    })
  })
};

episode.defaultProps = {
  url: {
    query: {
      title: ''
    }
  }
};

exports.default = episode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VwaXNvZGUuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiTGF5b3V0IiwiZXBpc29kZSIsInByb3BzIiwidXJsIiwicXVlcnkiLCJ0aXRsZSIsInByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUduQixJQUFNLFVBQVUsU0FBVixBQUFVLGVBQUE7eUJBQ2QsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQU0sSUFBTixBQUFVLE1BRGpCLEFBQ0UsQUFBcUIsQUFDckIsd0JBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSFksQUFDZCxBQUVFO0FBSEo7O0FBT0EsUUFBQSxBQUFROzJCQUNELEFBQVU7K0JBQ04sQUFBVTthQUNSLG9CQUFBLEFBQVUsT0FIdkIsQUFBb0IsQUFDYixBQUFnQixBQUNaLEFBQWdCLEFBQ0c7QUFESCxBQUNyQixLQURLO0FBRFksQUFDbkIsR0FERztBQURhLEFBQ2xCOztBQU9GLFFBQUEsQUFBUTs7O2FBQVIsQUFBdUIsQUFDaEIsQUFDSSxBQUNFLEFBS2I7QUFOVyxBQUNMO0FBRkMsQUFDSDtBQUZtQixBQUNyQjs7a0JBT0YsQUFBZSIsImZpbGUiOiJlcGlzb2RlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jbGFpcmVuaWVkZXJiZXJnZXIvcmVwb3Mvd3QifQ==