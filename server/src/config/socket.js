// src/config/socket.js
import { Server } from "socket.io";

let io;
export const onlineAdmins = new Map();

export const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: [
        "http://localhost:5173",
        "https://maabaglamukhimandir.netlify.app",
      ],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("🔌 Socket connected:", socket.id);

    // admin explicitly registers
    socket.on("admin:online", (userId) => {
      if (!userId) return;

      onlineAdmins.set(userId, socket.id);
      console.log("🟢 Admin online:", userId);
    });

    socket.on("disconnect", () => {
      for (const [userId, sId] of onlineAdmins.entries()) {
        if (sId === socket.id) {
          onlineAdmins.delete(userId);
          console.log("🔴 Admin offline:", userId);
          break;
        }
      }
    });
  });
};

export const emitAdminNotification = (data) => {
  if (!io) return;

  for (const socketId of onlineAdmins.values()) {
    io.to(socketId).emit("notification", data);
  }
};