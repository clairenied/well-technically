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

var _Content = require('../app/components/Content');

var _Content2 = _interopRequireDefault(_Content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/pages/episode.js?entry';


var episode = function episode(props) {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_Content2.default, { title: props.url.query.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Lorem ipsum woo')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2VwaXNvZGUuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiTGF5b3V0IiwiQ29udGVudCIsImVwaXNvZGUiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwidGl0bGUiLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sVUFBVSxTQUFWLEFBQVUsZUFBQTt5QkFDZCxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsbUNBQVEsT0FBTyxNQUFBLEFBQU0sSUFBTixBQUFVLE1BQTFCLEFBQWdDO2dCQUFoQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSFUsQUFDZCxBQUNFLEFBQ0U7QUFITjs7QUFRQSxRQUFBLEFBQVE7MkJBQ0QsQUFBVTsrQkFDTixBQUFVO2FBQ1Isb0JBQUEsQUFBVSxPQUh2QixBQUFvQixBQUNiLEFBQWdCLEFBQ1osQUFBZ0IsQUFDRztBQURILEFBQ3JCLEtBREs7QUFEWSxBQUNuQixHQURHO0FBRGEsQUFDbEI7O0FBT0YsUUFBQSxBQUFROzs7YUFBUixBQUF1QixBQUNoQixBQUNJLEFBQ0UsQUFLYjtBQU5XLEFBQ0w7QUFGQyxBQUNIO0FBRm1CLEFBQ3JCOztrQkFPRixBQUFlIiwiZmlsZSI6ImVwaXNvZGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCJ9