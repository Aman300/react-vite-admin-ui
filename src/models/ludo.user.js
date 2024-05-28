const mongoose = require("mongoose");

// Define User Schema
const schema = new mongoose.Schema(
  {

    email:{
        type: Number,
        required: true,
        trim: true
    },
    otp:{
        type: String,
        required: true,
        trim: true,
    },
    is_user_verified:{
        type: Boolean,
        default: false,
    },
    photo:{
        type: String,
        default: null,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
    },
    wallet_balance:{
        type: Number,
        trim: true,
        default: 0,
    },
    total_withdrawal_amt:{
        type: Number,
        trim: true,
        default: 0,
    },
    total_deposit_amt:{
        type: Number,
        trim: true,
        default: 0,
    },
    total_bonus_amt:{
        type: Number,
        trim: true,
        default: 0,
    },
    role: {
      type: String,
      enum: ["user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Create User model
const ludoUser = mongoose.model("ludo.user", schema);

module.exports = ludoUser;