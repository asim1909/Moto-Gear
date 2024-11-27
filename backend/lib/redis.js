import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: true,  // Enable TLS if using Upstash
  connectTimeout: 10000,  // Increase the connection timeout (e.g., 10 seconds)
  maxRetriesPerRequest: 3,  // Retry fewer times to prevent overloading
});

// Log successful connection
redis.on("connect", () => {
  console.log("Connected to Redis");
});

// Handle Redis errors
redis.on("error", (err) => {
  console.error("Redis connection error:", err.message);
});
