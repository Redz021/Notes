"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpCommon = _interopRequireDefault(require("../http-common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TutorialDataService =
/*#__PURE__*/
function () {
  function TutorialDataService() {
    _classCallCheck(this, TutorialDataService);
  }

  _createClass(TutorialDataService, [{
    key: "getAll",
    value: function getAll() {
      return _httpCommon["default"].get('/tutorials');
    }
  }, {
    key: "get",
    value: function get(id) {
      return _httpCommon["default"].get("/tutorials/".concat(id));
    }
  }, {
    key: "create",
    value: function create(data) {
      return _httpCommon["default"].post('/tutorials', data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return _httpCommon["default"].put("/tutorials/".concat(id), data);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return _httpCommon["default"]["delete"]("/tutorials/".concat(id));
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      return _httpCommon["default"]["delete"]('/tutorials');
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      return _httpCommon["default"].get("/tutorials?title=".concat(title));
    }
  }]);

  return TutorialDataService;
}();

var _default = new TutorialDataService();

exports["default"] = _default;