const mongooes = require('mongoose');

const userSchema = mongooes.Schema({
    fullname: String,
    email: {
        type: String,
        require: true
    },
    password: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongooes.model('blog_user', userSchema);



