import React, { useState, useRef } from "react";
import NextImage from "next/image";

const MemeGenerator =  ({ addToGallery }: { addToGallery: (image: string) => void }) => {
  const [background, setBackground] = useState<string>("/images/background.png");
  const [characterImage, setCharacterImage] = useState<string>("/images/unchill.png");
  const [customText, setCustomText] = useState<string>("Your caption here");
  const [topCaption, setTopCaption] = useState<string>("");
  const [showTopCaption, setShowTopCaption] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 100, y: 300 });
  const [topCaptionPosition, setTopCaptionPosition] = useState({ x: 100, y: 50 });
  const [characterPosition, setCharacterPosition] = useState({ x: 150, y: 100 });
  const [characterSize, setCharacterSize] = useState({ width: 150, height: 200 });
  const [fontSize, setFontSize] = useState<number>(20);
  const [topFontSize, setTopFontSize] = useState<number>(20);
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [resizing, setResizing] = useState(false);
  const [dragging, setDragging] = useState<{
    target: "text" | "topCaption" | "character" | null;
    offsetX: number;
    offsetY: number;
  }>({ target: null, offsetX: 0, offsetY: 0 });

  const handleMouseDownResize = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setResizing(true);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    target: "text" | "character" | "topCaption",
    position: { x: number; y: number }
  ) => {
    e.stopPropagation();
    setDragging({
      target,
      offsetX: e.clientX - position.x,
      offsetY: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (resizing) {
      const rect = previewRef.current?.getBoundingClientRect();
      const newWidth = Math.max(
        50,
        e.clientX - (rect?.left ?? 0) - characterPosition.x
      );
      const newHeight = Math.max(
        50,
        e.clientY - (rect?.top ?? 0) - characterPosition.y
      );
      setCharacterSize({ width: newWidth, height: newHeight });
    } else if (dragging.target && previewRef.current) {
      const rect = previewRef.current.getBoundingClientRect();
      const x = e.clientX - dragging.offsetX;
      const y = e.clientY - dragging.offsetY;

      if (dragging.target === "text") {
        setTextPosition({ x, y });
      } else if (dragging.target === "topCaption") {
        setTopCaptionPosition({ x, y });
      } else if (dragging.target === "character") {
        setCharacterPosition({ x, y });
      }
    }
  };

  const handleAddToGallery = () => {
    const canvas = canvasRef.current;
    if (canvas && characterImage === "/images/unchill.png") {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const previewRect = previewRef.current?.getBoundingClientRect();
        if (previewRect) {
          canvas.width = previewRect.width;
          canvas.height = previewRect.height;
        }

        const bgImage = new window.Image();
        bgImage.src = background;
        bgImage.onload = () => {
          ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

          const charImage = new window.Image();
          charImage.src = characterImage;
          charImage.onload = () => {
            ctx.drawImage(
              charImage,
              characterPosition.x,
              characterPosition.y,
              characterSize.width,
              characterSize.height
            );

            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";

            if (showTopCaption && topCaption) {
              ctx.font = `${topFontSize}px Arial`;
              ctx.fillText(
                topCaption,
                topCaptionPosition.x + characterSize.width / 2,
                topCaptionPosition.y
              );
            }

            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(
              customText,
              textPosition.x + characterSize.width / 2,
              textPosition.y
            );

            addToGallery(canvas.toDataURL("image/png"));
          };
        };
      }
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
        const previewRect = previewRef.current?.getBoundingClientRect();
        if (previewRect) {
          canvas.width = previewRect.width;
          canvas.height = previewRect.height;
        }

        const bgImage = new window.Image();
        bgImage.src = background;
        bgImage.onload = () => {
          ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

          const charImage = new window.Image();
          charImage.src = characterImage;
          charImage.onload = () => {
            ctx.drawImage(
              charImage,
              characterPosition.x,
              characterPosition.y,
              characterSize.width,
              characterSize.height
            );

            ctx.font = `${fontSize}px Arial`;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";

            if (showTopCaption && topCaption) {
              ctx.font = `${topFontSize}px Arial`;
              ctx.fillText(
                topCaption,
                topCaptionPosition.x + characterSize.width / 2,
                topCaptionPosition.y
              );
            }

            ctx.font = `${fontSize}px Arial`;
            ctx.fillText(
              customText,
              textPosition.x + characterSize.width / 2,
              textPosition.y
            );

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

      {/* Step 1: Choose Background */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Step 1: Choose a Background</h3>
        <div className="flex gap-4">
          <button
            className="p-4 border rounded-md hover:bg-gray-200 transition"
            onClick={() => setBackground("/images/meme2.jpg")}
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

      {/* Step 2: Upload Character */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Step 2: Upload Character</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => setCharacterImage(reader.result as string);
              reader.readAsDataURL(file);
            }
          }}
          className="p-4 border rounded-md"
        />
      </div>

      {/* Step 3: Captions */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Step 3: Add Captions</h3>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Write your bottom caption here..."
          className="w-full border px-4 py-2 rounded-md mb-4"
        />
        <div className="mb-4">
          <label className="block mb-2">Font Size (Bottom Caption):</label>
          <input
            type="range"
            min="10"
            max="50"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={showTopCaption}
            onChange={(e) => setShowTopCaption(e.target.checked)}
            className="mr-2"
          />
          <span>Add Top Caption</span>
        </div>
        {showTopCaption && (
          <>
            <textarea
              value={topCaption}
              onChange={(e) => setTopCaption(e.target.value)}
              placeholder="Write your top caption here..."
              className="w-full border px-4 py-2 rounded-md mb-4"
            />
            <div className="mb-4">
              <label className="block mb-2">Font Size (Top Caption):</label>
              <input
                type="range"
                min="10"
                max="50"
                value={topFontSize}
                onChange={(e) => setTopFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </>
        )}
      </div>

      {/* Step 4: Preview and Download */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Step 4: Preview and Download</h3>
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
            onMouseDown={(e) =>
              handleMouseDown(e, "character", characterPosition)
            }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: "absolute",
              top: characterPosition.y,
              left: characterPosition.x,
              width: characterSize.width,
              height: characterSize.height,
              borderRadius: "8px",
              border: hovered ? "2px solid black" : "none",
              transition: "border 0.2s",
            }}
          >
            <NextImage
              src={characterImage}
              alt="Character"
              width={characterSize.width}
              height={characterSize.height}
              className="w-full h-full pointer-events-none"
            />
            <div
              onMouseDown={handleMouseDownResize}
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                width: "20px",
                height: "20px",
                backgroundColor: "blue",
                cursor: "nwse-resize",
              }}
            ></div>
          </div>

          {/* Top Caption */}
          {showTopCaption && (
            <div
              onMouseDown={(e) =>
                handleMouseDown(e, "topCaption", topCaptionPosition)
              }
              style={{
                position: "absolute",
                top: topCaptionPosition.y,
                left: topCaptionPosition.x,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "8px",
                fontSize: `${topFontSize}px`,
                borderRadius: "4px",
                cursor: "grab",
              }}
            >
              {topCaption}
            </div>
          )}

          {/* Bottom Caption */}
          <div
            onMouseDown={(e) => handleMouseDown(e, "text", textPosition)}
            style={{
              position: "absolute",
              top: textPosition.y,
              left: textPosition.x,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "8px",
              fontSize: `${fontSize}px`,
              borderRadius: "4px",
              cursor: "grab",
            }}
          >
            {customText}
          </div>
        </div>
      </div>

      {/* Canvas for Rendering */}
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
          {/* Add Captions UI */}
          {/*}
      <button
        onClick={handleAddToGallery}
        className={`px-4 py-3 rounded text-sm ${
          characterImage !== "/images/unchill.png" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
        }`}
        disabled={characterImage !== "/images/unchill.png"}
        title={
          characterImage !== "/images/unchill.png"
            ? "This feature is only available for the default $UNCHILL gal."
            : ""
        }
      >
        Add to Gallery
      </button>*/}
      </div>
    </section>
  );
};

export default MemeGenerator;
