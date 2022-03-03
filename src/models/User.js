const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  categoriesID: {
    type: [mongoose.SchemaTypes.ObjectId]
  },
  isActive: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  modificatedAt: {
    type: Date
  }
});

module.exports = mongoose.model('Users', UserSchema);
