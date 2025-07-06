// deleteData.js

const mongoose = require("mongoose");
const Listing = require("../models/listing");

// your MongoDB connection string
const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";  // replace if you use Atlas

mongoose.connect(dbUrl)
  .then(() => {
    console.log("🟢 MongoDB connected successfully");
  })
  .catch(err => {
    console.log("🔴 MongoDB connection error:");
    console.log(err);
  });

const deleteAllListings = async () => {
  try {
    await Listing.deleteMany({});
    console.log("✅ All listings deleted successfully");
  } catch (e) {
    console.log("❌ Error deleting listings:");
    console.log(e);
  } finally {
    mongoose.connection.close();
  }
};

deleteAllListings();
