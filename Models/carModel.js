import mongoose from "mongoose";

const carSchema = mongoose.Schema(
  {
    carModel: String,
    carLink: String,
    carYear: String,
    carPrice: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cars", carSchema);
