const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name:{
      type:String,
      required: true,
    },
    username:{
        type:String,
        required: true,
    },
    avatar:{
        type:String,
        required: true,
    },
}, {
    timestamps: true, //createdAt ,updatedAt

  });

  module.exports = model('Dev', DevSchema);