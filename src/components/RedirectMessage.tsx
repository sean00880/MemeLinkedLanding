"use client";

import React, { useEffect } from "react";

interface RedirectMessageProps {
  message: string | null;
}

const RedirectMessage: React.FC<RedirectMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-500 text-white p-4">
      {message}
    </div>
  );
};

export default RedirectMessage;
