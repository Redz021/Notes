const { mongoose } = require(".");

// module.exports = mongoose => {
//     const Tutorial = mongoose.model(
//         'tutorial',
//         mongoose.Schema({
//             title: String,
//             description: String,
//             published: Boolean
//         }, {
//             timestamps: true
//         })
//     )
//     return Tutorial
// }

//改写toJSON使_id变为id

module.exports = mongoose => {
    let schema = mongoose.Schema({
        title: String,
        description: String,
        published: Boolean
    }, {
        timestamps: true
    })
    schema.method('toJSON', function() {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })
    const Tutorial = mongoose.model('toturial', schema)
    return Tutorial
}