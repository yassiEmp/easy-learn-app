import mongoose from "mongoose";

export default async function connectDb() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "the mongo db uiri string is missing (add it to the environement variable) at /db/connectDb.ts"
      );
    }
    const db = await mongoose.connect(uri);
    return db;
  } catch (err) {
    console.error(err);
    return null
  }
}

connectDb();
