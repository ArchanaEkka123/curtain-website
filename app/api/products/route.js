import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const features = JSON.parse(formData.get("features"));
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { error: "Image missing" },
        { status: 400 }
      );
    }

    // convert file -> buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // upload to cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "products" }, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        })
        .end(buffer);
    });

    // save to mongodb
    const product = await Product.create({
      title,
      description,
      features,
      image: uploadResult.secure_url,
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}