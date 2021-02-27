const { mongoose } = require('.')
module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      studyNum: String,
      username: String,
      password: String,
      type: String,
    },
    {
      timestamps: true,
    }
  )
  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })
  const User = mongoose.model('user', schema)
  return User
}
