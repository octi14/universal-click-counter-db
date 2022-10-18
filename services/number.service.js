let Number = require("../models/number.model");

exports.get = async function () {
  try {
    return await Number.find()
  } catch (e) {
    console.error(e);
    throw Error("Error getting objects.");
  }
};

exports.create = async function ({ thenumber }) {
  await Number.ensureIndexes();
  return await Number.create({ thenumber });
};

exports.update = async function (id, update) {
  return Number.findOneAndUpdate({ _id: id }, update, {
    new: true,
  });
};
