// utils/createNotification.js
import Notification from "../models/notification.model.js";
import { emitAdminNotification } from "../config/socket.js";

const createNotification = async ({ type, message, url }) => {
  // 🔒 validation (IMPORTANT)
  if (!type || !message) {
    console.error("createNotification missing fields:", { type, message });
    return; // fail silently (no crash)
  }

  const notification = await Notification.create({
    type,
    message,
    url,
  });

  emitAdminNotification({
    id: notification._id,
    type: notification.type,
    message: notification.message,
    url: notification.url,
    createdAt: notification.createdAt,
  });

  return notification;
};

export default createNotification;