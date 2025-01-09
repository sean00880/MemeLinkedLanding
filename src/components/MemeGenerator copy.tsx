import React, { useState, useRef } from "react";
import NextImage from "next/image";

const MemeGenerator = () => {
  const [background, setBackground] = useState<string>("/images/background.png");
  const [customText, setCustomText] = useState<string>("Your caption here");
  const [textPosition, setTextPosition] = useState({ x: 100, y: 300 });
  const [characterPosition, setCharacterPosition] = useState({ x: 150, y: 100 });
  const [characterSize, setCharacterSize] = useState({ width: 150, height: 200 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  

  const [resizing, setResizing] = useState(false);
  const [dragging, setDragging] = useState<{
    target: "text" | "character" | null;
    offsetX: number;
    offsetY: number;
  }>({ target: null, offsetX: 0, offsetY: 0 });

  const handleMouseDownResize = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setResizing(true);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    target: "text" | "character"
  ) => {
    e.stopPropagation();
  
    const rect = e.currentTarget.getBoundingClientRect(); // Get the bounding box of the clicked element
    const offsetX = e.clientX - rect.left; // Calculate offset relative to the element
    const offsetY = e.clientY - rect.top; // Calculate offset relative to the element
  
    setDragging({
      target,
      offsetX,
      offsetY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging.target && previewRef.current) {
      const rect = previewRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - dragging.offsetX;
      const y = e.clientY - rect.top - dragging.offsetY;
  
      if (dragging.target === "text") {
        setTextPosition({ x, y });
      } else if (dragging.target === "character") {
        setCharacterPosition({ x, y });
      }
    } else if (resizing) {
      const rect = previewRef.current?.getBoundingClientRect();
      const width = Math.max(
        50,
        e.clientX - (rect?.left ?? 0) - characterPosition.x
      );
      const height = Math.max(
        50,
        e.clientY - (rect?.top ?? 0) - characterPosition.y
      );
      setCharacterSize({ width, height });
    }
  };
  

  const handleMouseUp = () => {
    setDragging({ target: null, offsetX: 0, offsetY: 0 });
    setResizing(false);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Set canvas size to match the preview container
        const previewRect = previewRef.current?.getBoundingClientRect();
        if (previewRect) {
          canvas.width = previewRect.width;
          canvas.height = previewRect.height;
        }
  
        // Draw the background
        const bgImage = new window.Image();
        bgImage.src = background;
        bgImage.onload = () => {
          ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  
          // Draw the character image
          const charImage = new window.Image();
          charImage.src = "/images/unchill.png";
          charImage.onload = () => {
            ctx.drawImage(
              charImage,
              characterPosition.x,
              characterPosition.y,
              characterSize.width,
              characterSize.height
            );
  
            // Draw the custom text
            ctx.font = "20px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center"; // Center-align the text
            ctx.fillText(
              customText,
              textPosition.x + characterSize.width / 2, // Adjust x to center text
              textPosition.y
            );
  
            // Download the canvas as an image
            const link = document.createElement("a");
            link.download = "meme.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          };
        };
      }
    }
  };
  

  return (
    <section
      className="flex flex-col w-full py-8 px-6 bg-gray-100 text-gray-800"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Meme Generator</h2>

      {/* Choose Background */}
      <div className="mb-6 w-[500px] h-[500px]">
        <h3 className="text-xl font-semibold mb-4">1. Choose a Background</h3>
        <div className="flex gap-4">
          <button
            className="p-4 border rounded-md hover:bg-gray-200 transition"
            onClick={() => setBackground("/images/background.png")}
          >
            Template
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => setBackground(reader.result as string);
                reader.readAsDataURL(file);
              }
            }}
            className="p-4 border rounded-md"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="mb-6">
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Write your custom text here..."
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      {/* Preview with Drag-and-Drop and Resizing */}
      <div
        className="mb-6 w-[500px] h-[500px] border rounded-md overflow-hidden bg-gray-200 relative"
        ref={previewRef}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        {/* Character */}
        <div
  onMouseDown={(e) => handleMouseDown(e, "character")}
  style={{
    position: "absolute",
    top: characterPosition.y,
    left: characterPosition.x,
    width: characterSize.width,
    height: characterSize.height,
  }}
  className="relative group"
>
  {/* Character Image */}
  <NextImage
    src="/images/unchill.png"
    alt="Character"
    width={characterSize.width}
    height={characterSize.height}
    className="w-full h-full pointer-events-none"
    style={{
      outline: "none", // Disable blue outline on focus
      userSelect: "none", // Disable text selection
    }}
  />

  {/* Hover/Focus Border */}
  <div
    className="absolute inset-0 rounded-md border-2 border-black opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none"
  ></div>

  {/* Resize Handle */}
  <div
    onMouseDown={handleMouseDownResize}
    style={{
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "20px",
      height: "20px",
      backgroundColor: "blue",
      cursor: "nwse-resize",
      outline: "none", // Disable blue outline on focus
      userSelect: "none", // Disable text selection
    }}
  ></div>
</div>
<div
          onMouseDown={(e) => handleMouseDown(e, "text")}
          style={{
            position: "absolute",
            top: textPosition.y,
            left: textPosition.x,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "8px",
            borderRadius: "4px",
            cursor: "grab",
          }}
        >
          {customText}
        </div>
      </div>

      {/* Canvas for Final Rendering */}
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        style={{ display: "none" }}
      ></canvas>

      {/* Generate and Download */}
      <div className="text-center">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-[maroon] transition"
        >
          Download Meme
        </button>
      </div>
    </section>
  );
};

export default MemeGenerator;
