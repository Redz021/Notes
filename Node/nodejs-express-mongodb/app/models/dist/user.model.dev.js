"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _require = require('.'),
    mongoose = _require.mongoose;

module.exports = function (mongoose) {
  var schema = mongoose.Schema({
    studyNum: String,
    username: String,
    password: String,
    type: String
  }, {
    timestamps: true
  });
  schema.method('toJSON', function () {
    var _this$toObject = this.toObject(),
        __v = _this$toObject.__v,
        _id = _this$toObject._id,
        object = _objectWithoutProperties(_this$toObject, ["__v", "_id"]);

    object.id = _id;
    return object;
  });
  var User = mongoose.model('user', schema);
  return User;
};