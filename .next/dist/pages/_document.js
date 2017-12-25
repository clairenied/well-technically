'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _analytics = require('./analytics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/pages/_document.js?entry';


var WTDocument = function (_Document) {
  (0, _inherits3.default)(WTDocument, _Document);

  function WTDocument() {
    (0, _classCallCheck3.default)(this, WTDocument);

    return (0, _possibleConstructorReturn3.default)(this, (WTDocument.__proto__ || (0, _getPrototypeOf2.default)(WTDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(WTDocument, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        (0, _analytics.initGA)();
        window.GA_INITIALIZED = true;
      }
      (0, _analytics.logPageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Well, Technically...'), _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/static/favicons/apple-touch-icon.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicons/favicon-32x32.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicons/favicon-16x16.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Work+Sans:100,200,300,400,500,600,700,800,900',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();

      return {
        html: html,
        head: head,
        errorHtml: errorHtml,
        chunks: chunks,
        styles: styles
      };
    }
  }]);

  return WTDocument;
}(_document2.default);

exports.default = WTDocument;

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiaW5pdEdBIiwibG9nUGFnZVZpZXciLCJXVERvY3VtZW50Iiwid2luZG93IiwiR0FfSU5JVElBTElaRUQiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFtQjs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3dDQW9CQyxBQUNsQjtVQUFJLENBQUMsT0FBTCxBQUFZLGdCQUFnQixBQUMxQjtBQUNBO2VBQUEsQUFBTyxpQkFBUCxBQUF3QixBQUN6QjtBQUNEO0FBQ0Q7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpRUFBTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFdBQVUsTUFBN0MsQUFBa0Q7b0JBQWxEO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCLGFBQVksT0FBbEMsQUFBd0MsU0FBUSxNQUFoRCxBQUFxRDtvQkFBckQ7c0JBSEYsQUFHRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsYUFBWSxPQUFsQyxBQUF3QyxTQUFRLE1BQWhELEFBQXFEO29CQUFyRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsWUFBVyxNQUFyQixBQUEwQjtvQkFBMUI7c0JBTEYsQUFLRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGFBQVksTUFBdEIsQUFBMkIsMEJBQXlCLE9BQXBELEFBQTBEO29CQUExRDtzQkFORixBQU1FLEFBQ0E7QUFEQTs7Y0FDQSxBQUNPLEFBQ0w7YUFGRixBQUVNOztvQkFGTjtzQkFQRixBQU9FLEFBSUE7QUFKQTtBQUNFLGtEQUdJLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFaSixBQUNFLEFBV0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBakJOLEFBQ0UsQUFjRSxBQUVFLEFBTVA7QUFOTztBQUFBOzs7OzBDQTdDK0I7VUFBZCxBQUFjLGtCQUFkLEFBQWM7O3dCQUFBLEFBTWpDO1VBTmlDLEFBRW5DLG1CQUZtQyxBQUVuQztVQUZtQyxBQUduQyxtQkFIbUMsQUFHbkM7VUFIbUMsQUFJbkMsd0JBSm1DLEFBSW5DO1VBSm1DLEFBS25DLHFCQUxtQyxBQUtuQyxBQUdGOztVQUFNLFNBQU4sQUFBZSxBQUVmOzs7Y0FBTyxBQUVMO2NBRkssQUFHTDttQkFISyxBQUlMO2dCQUpLLEFBS0w7Z0JBTEYsQUFBTyxBQU9SO0FBUFEsQUFDTDs7Ozs7QUFaa0MsQTs7a0JBQW5CLEE7O0FBcURwQiIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYWlyZW5pZWRlcmJlcmdlci9yZXBvcy93dCJ9