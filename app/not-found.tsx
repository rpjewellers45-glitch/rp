import { LocaleText } from "@/components/i18n/LocaleText";
import { GoldButton } from "@/components/ui/GoldButton";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[80vh] flex-col items-center justify-center bg-maroon-900 px-6 pb-20 pt-32 text-center text-ivory">
      <p className="type-eyebrow text-gold-300">404</p>
      <h1 className="mt-4 max-w-xl type-section">
        <LocaleText k="missing.title" />
      </h1>
      <p className="type-body mt-4 max-w-md text-ivory/80">
        <LocaleText k="missing.body" />
      </p>
      <div className="mt-8">
        <GoldButton href="/">
          <LocaleText k="missing.home" />
        </GoldButton>
      </div>
    </main>
  );
}
