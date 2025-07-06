const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
  console.log("✅ DB is connected");
  initDB();
}).catch((err) => console.error("❌ DB connection failed:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
   initData.data =  initData.data.map((obj)=>({...obj, owner: '685ffb9b2f4357b6df27b33d'}))
    await Listing.insertMany(initData.data);
    console.log("✅ Data was initialized");
  } catch (err) {
    console.error("❌ Error initializing data:", err);
  } finally {
    mongoose.connection.close();
  }
};
