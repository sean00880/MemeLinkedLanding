import cloudinary from "../../lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { file } = await req.json(); // Get the file from the request body
    const result = await cloudinary.uploader.upload(file, {
      folder: "uploads", // Optional: Specify a folder in Cloudinary
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
