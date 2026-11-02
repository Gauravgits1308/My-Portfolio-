import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-fast">
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 layout-container flex flex-col items-center justify-center p-space-8 text-center focus:outline-none"
      >
        <div className="flex flex-col items-center gap-space-4 max-w-content">
          <p className="font-mono text-mono-micro text-accent uppercase tracking-widest select-none">
            {"// PHASE 3 COMPLETE"}
          </p>
          <p className="text-body text-secondary">
            Portfolio foundation ready for Phase 4.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
