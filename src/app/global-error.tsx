"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#050507] text-[#D1D2D9] font-sans antialiased flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-2xl border border-[#23252E] bg-[#0B0C0E] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-[#E11D48]/40 bg-[#121316] text-[#FF2E5B] font-mono font-bold text-2xl">
            !
          </div>
          <h1 className="text-2xl font-bold text-[#F4F4F6] mb-2">
            Critical Environment Error
          </h1>
          <p className="text-sm text-[#8E8F99] mb-6">
            A critical interruption occurred in the application shell.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="w-full py-2.5 px-4 rounded-lg bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium text-sm transition-colors cursor-pointer"
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
