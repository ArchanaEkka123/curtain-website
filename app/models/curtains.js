import mongoose from "mongoose";

const CurtainSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

export default mongoose.models.Curtain ||
  mongoose.model("Curtain", CurtainSchema);