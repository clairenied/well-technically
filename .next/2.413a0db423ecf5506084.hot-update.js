webpackHotUpdate(2,{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(35);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(374);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(223);

var _server2 = _interopRequireDefault(_server);

var _analytics = __webpack_require__(413);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/claireniederberger/repos/wt/pages/_document.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claireniederberger/repos/wt/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi40MTNhMGRiNDIzZWNmNTUwNjA4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzPzIwM2EzNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcic7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi9hbmFseXRpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXVERvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaHRtbCxcbiAgICAgIGhlYWQsXG4gICAgICBlcnJvckh0bWwsXG4gICAgICBjaHVua3MsXG4gICAgfSA9IHJlbmRlclBhZ2UoKTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IGZsdXNoKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaHRtbCxcbiAgICAgIGhlYWQsXG4gICAgICBlcnJvckh0bWwsXG4gICAgICBjaHVua3MsXG4gICAgICBzdHlsZXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICBpbml0R0EoKVxuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5XZWxsLCBUZWNobmljYWxseS4uLjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL3N0YXRpYy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTo0MDAsNDAwaSw3MDAsNzAwaSw5MDAsOTAwaXxXb3JrK1NhbnM6MTAwLDIwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG5cblxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQU1BO0FBTkE7QUFBQTs7OztBQTdDQTtBQUFBO0FBQ0E7QUFLQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTs7Ozs7Ozs7O0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=