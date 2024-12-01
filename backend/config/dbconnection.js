import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://lalitmaxpro:1Xs94Z2lXrhunL9N@cluster0.2iahz.mongodb.net/classprojectdb"
  );
  console.log("Db Connection success")
} catch (error) {
    console.error("DB connection failed with error: ", error)
}
