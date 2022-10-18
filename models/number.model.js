const { Schema, model } = require("mongoose");

const numberSchema = new Schema(
  {
    thenumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("number", numberSchema);
