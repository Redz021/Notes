const mongoose = require('.');
module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      studyNum: String,
      username: String,
      password: String,
      type: String,
      courses: Array
    },
    { timestamps: true }
  );
  schema.method('toJSON', function() {
    const { __v, _id, ...obj } = this.toObject();
    obj.id = _id;
    return obj;
  });
  const User = mongoose.model('user', schema);
  return User;
};
