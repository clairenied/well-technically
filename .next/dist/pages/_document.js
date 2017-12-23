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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claireniederberger/repos/wt/pages/_document.js?entry';


var WTDocument = function (_Document) {
  (0, _inherits3.default)(WTDocument, _Document);

  function WTDocument() {
    (0, _classCallCheck3.default)(this, WTDocument);

    return (0, _possibleConstructorReturn3.default)(this, (WTDocument.__proto__ || (0, _getPrototypeOf2.default)(WTDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(WTDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Work+Sans:100,200,300,400,500,600,700,800,900',
        rel: 'stylesheet',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiV1REb2N1bWVudCIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs2QkFvQlYsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBO2NBQ0UsQUFDTyxBQUNMO2FBRkYsQUFFTTs7b0JBRk47c0JBRkosQUFDRSxBQUNFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBVk4sQUFDRSxBQU9FLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7MENBOUIrQjtVQUFkLEFBQWMsa0JBQWQsQUFBYzs7d0JBQUEsQUFNakM7VUFOaUMsQUFFbkMsbUJBRm1DLEFBRW5DO1VBRm1DLEFBR25DLG1CQUhtQyxBQUduQztVQUhtQyxBQUluQyx3QkFKbUMsQUFJbkM7VUFKbUMsQUFLbkMscUJBTG1DLEFBS25DLEFBR0Y7O1VBQU0sU0FBTixBQUFlLEFBRWY7OztjQUFPLEFBRUw7Y0FGSyxBQUdMO21CQUhLLEFBSUw7Z0JBSkssQUFLTDtnQkFMRixBQUFPLEFBT1I7QUFQUSxBQUNMOzs7OztBQVprQyxBOztrQkFBbkIsQTs7QUFvQ3BCIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2xhaXJlbmllZGVyYmVyZ2VyL3JlcG9zL3d0In0=