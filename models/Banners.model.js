const mongoose = require("mongoose");

/**
 * Campaign
 * @typedef {object} Banner
 * @property {number} orderNo.required - Unique Id of the merchant
 * @property {string} campaignId.required - Unique Id of the merchant
 * @property {string} nft.required - Company of the campaign
 * @property {string} company.required - Logo URL of the campaign
 * @property {string} percentage.required - Location of the campaign
 * @property {string} description.required - Logo URL of the campaign
 * @property {string} extUrl - Location of the campaign
 * @property {string} url.required - Location of the campaign
 * @property {boolean} status.required - Location of the campaign
 */

const bannerSchema = new mongoose.Schema({
  orderNo: { type: Number },
  campaignId: { type: String, required: true },
  nft: { type: String, required: true },
  company: { type: String, required: true },
  percentage: { type: String, required: true },
  description: { type: String, required: true },
  extUrl: { type: String, required: false },
  url: { type: String, required: true },
  status: { type: Boolean, required: true },
})

module.exports = mongoose.model("Banner", bannerSchema);
