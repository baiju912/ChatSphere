import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["blog", "puja", "system", "custom", "newsletter","subscriber"],
      default: "system",
    },

    url: {
      type: String,
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 60 * 24 * 30,
    },
  },
  {
    timestamps: false,
  },
);

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
