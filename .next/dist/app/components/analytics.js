'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logException = exports.logEvent = exports.logPageView = exports.initGA = undefined;

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = exports.initGA = function initGA() {
  console.log('GA init');
  _reactGa2.default.initialize('UA-111630586-1');
}; /**
    * from: https://malloc.fi/using-google-analytics-with-next-js
    */

var logPageView = exports.logPageView = function logPageView() {
  console.log('Logging pageview for ${window.location.pathname}');
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
};

var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    _reactGa2.default.event({ category: category, action: action });
  }
};

var logException = exports.logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    _reactGa2.default.exception({ description: description, fatal: fatal });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FuYWx5dGljcy5qcyJdLCJuYW1lcyI6WyJSZWFjdEdBIiwiaW5pdEdBIiwiY29uc29sZSIsImxvZyIsImluaXRpYWxpemUiLCJsb2dQYWdlVmlldyIsInNldCIsInBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFnZXZpZXciLCJsb2dFdmVudCIsImNhdGVnb3J5IiwiYWN0aW9uIiwiZXZlbnQiLCJsb2dFeGNlcHRpb24iLCJkZXNjcmlwdGlvbiIsImZhdGFsIiwiZXhjZXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsQUFBTyxBQUVQOzs7Ozs7QUFBTyxJQUFNLDBCQUFTLFNBQVQsQUFBUyxTQUFNLEFBQzFCO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtvQkFBQSxBQUFRLFdBQVIsQUFBbUIsQUFDcEI7QUFITSxBQUtQLEdBWEE7Ozs7QUFXTyxJQUFNLG9DQUFjLFNBQWQsQUFBYyxjQUFNLEFBQy9CO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtvQkFBQSxBQUFRLElBQUksRUFBRSxNQUFNLE9BQUEsQUFBTyxTQUEzQixBQUFZLEFBQXdCLEFBQ3BDO29CQUFBLEFBQVEsU0FBUyxPQUFBLEFBQU8sU0FBeEIsQUFBaUMsQUFDbEM7QUFKTSxBQU1QOztBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQWdDO01BQS9CLEFBQStCLCtFQUFwQixBQUFvQjtNQUFoQixBQUFnQiw2RUFBUCxBQUFPLEFBQ3REOztNQUFJLFlBQUosQUFBZ0IsUUFBUSxBQUN0QjtzQkFBQSxBQUFRLE1BQU0sRUFBRSxVQUFGLFVBQVksUUFBMUIsQUFBYyxBQUNmO0FBQ0Y7QUFKTSxBQU1QOztBQUFPLElBQU0sc0NBQWUsU0FBZixBQUFlLGVBQXFDO01BQXBDLEFBQW9DLGtGQUF0QixBQUFzQjtNQUFsQixBQUFrQiw0RUFBVixBQUFVLEFBQy9EOztNQUFBLEFBQUksYUFBYSxBQUNmO3NCQUFBLEFBQVEsVUFBVSxFQUFFLGFBQUYsYUFBZSxPQUFqQyxBQUFrQixBQUNuQjtBQUNGO0FBSk0iLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jbGFpcmVuaWVkZXJiZXJnZXIvcmVwb3Mvd3QifQ==