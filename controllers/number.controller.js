let NumberService = require("../services/number.service");

exports.get = async function (req, res) {
  try {
    let number = await NumberService.get();
    return res.status(200).json({
      data: number,
    });
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};

exports.add = async function (req, res) {
  try {
    // TODO: validate req.body
    const { thenumber } = req.body;

    const createdFile = await NumberService.create({ thenumber });
    return res.status(201).json({
      message: "Created",
      data: createdFile,
    });
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};

exports.update = async function (req, res) {
  try {

    const info = await NumberService.get();
    const oldNumber = info[0].thenumber;


    const updated = await NumberService.update(info[0]._id, {
      thenumber: oldNumber +1,
    });

    return res.status(200).json({
      message: "modificado.",
      data: updated,
    });
  } catch (e) {
    return res.status(400).json({
      message: e.message,
    });
  }
};
