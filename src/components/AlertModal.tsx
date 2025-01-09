import { useEffect } from "react";

interface AlertModalProps {
  message: string;
  onClose: () => void;
}

export default function AlertModal({ message, onClose }: AlertModalProps) {
  // Close modal when the escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-gray-700">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
