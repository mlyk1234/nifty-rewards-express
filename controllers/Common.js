const Campaign = require("../models/Campaigns.model");
const Banner = require("../models/Banners.model")
const Merchant = require("../models/Merchants.model");
const Reward = require("../models/Rewards.model");
const User = require("../models/Users.model");
const Collection = require("../models/Collections.model");
const axios = require("axios");
const ethers = require("ethers");
const { chains } = require("../utils/chains");
const randomstring = require("randomstring");

/**
 * GET /api/v1/campaign
 * @summary Get campaigns
 * @tags Campaign
 * @description Get campaign details. If no campaignId is given, retrieve all campaigns
 * @param {string} campaignId.query - Campaign Id
 * @return {CampaignEligibleResponse} 200 - success response - application/json
 * @return {DefaultErrorResponse} 400 - Bad request response
 */
exports.getBanner = async (req, res, next) => {
  let banner;
  try {
    banner = await Banner.find({ status: true });
  } catch (error) {
    console.log("🚀 | exports.getBanner= | error", error);
    return res.status(400).json({
      message: "Invalid Request",
      error: error,
    });
  }

  // // Aggregate rewards left
  // let quantity = 0;
  // try {
  //   console.log(
  //     await Reward.aggregate([
  //       { $match: { campaignId: campaignId } },
  //       { $group: { _id: null, quantity: { $sum: "$quantity" } } },
  //     ])
  //   );
  // } catch (error) {
  //   console.log("🚀 | exports.getCampaign= | error", error);
  //   return res.status(400).json({
  //     message: "Invalid Request",
  //     error: error,
  //   });
  // }

  if (!banner) {
    return res.status(200).json({
      message: "No Campaigns",
      data: {},
    });
  }

  return res.status(200).json({
    message: "Banners Retrieved",
    data: banner,
  });
};
