"use client";
import { useState } from "react";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({ file: file.name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.url) {
      setImageUrl(data.url); // Use Cloudinary's secure URL
    } else {
      console.error("Upload failed:", data.error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Upload to Cloudinary
      </button>
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="rounded" />
        </div>
      )}
    </div>
  );
}
