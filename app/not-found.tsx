import { GoldButton } from "@/components/ui/GoldButton";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[80vh] flex-col items-center justify-center bg-maroon-900 px-6 pb-20 pt-32 text-center text-ivory">
      <p className="text-[11px] uppercase tracking-[0.34em] text-gold-300">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">This page is not in the collection</h1>
      <p className="mt-4 max-w-md text-ivory/80">The link may have changed. The shop is still at Main Bazar, Dalsinghsarai.</p>
      <div className="mt-8">
        <GoldButton href="/">Back to home</GoldButton>
      </div>
    </main>
  );
}
