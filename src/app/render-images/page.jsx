"use client";
import { CldImage } from "next-cloudinary";

export default function RenderImages() {
  const images = [
    { id: 1, publicId: "feedgif" },
    { id: 2, publicId: "wallet2" },
    { id: 3, publicId: "hashtags" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <CldImage
          key={image.id}
          src={image.publicId}
          width="300"
          height="300"
          alt={`Cloudinary Image ${image.id}`}
          crop="fill"
          className="rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
}
