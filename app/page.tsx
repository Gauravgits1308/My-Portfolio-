import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center p-space-8 text-center bg-canvas focus:outline-none"
    >
      <div className="flex flex-col items-center gap-space-6 max-w-content">
        <p className="text-body-small text-secondary">
          Portfolio foundation initialized.
        </p>
        <div className="flex flex-col items-center gap-space-2">
          <span className="text-mono-micro text-tertiary uppercase tracking-wider">
            Theme Architecture
          </span>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}


