const Purchase = require("../models/Purchase");
const Ad = require("../models/Ad");

class AcepptController {
  async update(req, res) {
    const { id } = req.params;

    const purchase = await Purchase.findById(id);

    const { ad } = await Purchase.findById(id).populate({
      path: "ad",
      populate: {
        path: "author"
      }
    });
    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json({ error: "You're not the ad author" });
    }

    if (ad.purchasedBy) {
      return res
        .status(400)
        .json({ error: "This ad had already been purchased" });
    }

    ad.purchasedBy = id;
    purchase.sold = true;

    await ad.save();
    await purchase.save();

    return res.json(ad);
  }
}

module.exports = new AcepptController();
