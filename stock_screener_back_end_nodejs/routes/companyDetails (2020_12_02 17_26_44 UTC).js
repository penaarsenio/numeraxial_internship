const router = require("express").Router();
const Companies = require("../models/companies.model");

router.route("/").post((req, res) => {
  const info = req.body;
  console.log(info.companyName);
  Companies.findOne({ Name: info.companyName })
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
