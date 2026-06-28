import { Compass } from "lucide-react"

export default function App() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">
        <Compass className="size-4" aria-hidden="true" />
        Egypt Travel
      </span>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Vite + React + Tailwind is ready
      </h1>
      <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
        Phase 1&ndash;2 complete. The project now runs on Vite with Tailwind CSS v4 and the brand
        design tokens configured. Send the next phase prompt to continue.
      </p>
    </main>
  )
}
