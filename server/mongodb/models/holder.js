import mongoose from "mongoose";

// 字段的key不要叫做type!
const Holder = new mongoose.Schema({
  _id: {
    type: String,
  },
  wallet_address: {
    type: String,
  },
  assets: {
    crypto_holdings: {
      current_time_stamp: {
        type: Number,
      },
      tokens: {
        type: [
          {
            name: String,
            symbol: String,
            network: String,
            Amount: Number,
            decimals: Number,
            USDTvalue: Number,
            value: Number,
            contract_address: String,
            first_purchase_at: Number,
            last_time_activity: String,
            total_supply: Number,
            first_deploy_at: Number,
            label: [String],
          },
        ],
      },
      total_asset_value: {
        type: Number,
      },
      transaction_activities: {
        total_number: {
          type: Number,
        },
        "30d_number": {
          type: Number,
        },
        "30d_buy": {
          type: Number,
        },
        "30d_sell": {
          type: Number,
        },
        label: {
          type: [String],
        },
      },
    },
    nft_holdings: {
      tokens: {
        type: [
          {
            nft_name: String,
            network: String,
            amount: Number,
            value: Number,
            holding_value: Number,
            first_purchase_at: Number,
            rarity: Number,
            label: [String],
          },
        ],
      },
      total_asset_value: {
        type: Number,
      },
      transaction_activities: {
        total_number: {
          type: Number,
        },
        "30d_number": {
          type: Number,
        },
        "30d_buy": {
          type: Number,
        },
        "30d_sell": {
          type: Number,
        },
        label: {
          type: [String],
        },
      },
    },
  },
  social: {
    identity_holdings: {
      type: [String],
    },
    social_activities: {
      type: [
        {
          name: String,
          id: Number,
          network: String,
          createdAt: String,
          labels: [String],
        },
      ],
    },
  },
  third_party_recommendations: {
    token_labels: {
      type: [String],
    },
    token_recommendations: {
      type: [
        {
          name: String,
          contractAddress: String,
          score: Number,
          labels: [String],
        },
      ],
    },
  },
});

const userProfileModel = mongoose.model("user_profile", Holder);

export default userProfileModel;
