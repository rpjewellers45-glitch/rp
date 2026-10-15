import { LocaleText } from "@/components/i18n/LocaleText";

export function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 top-20 z-[60] flex items-center justify-center bg-ivory md:top-24"
    >
      <div className="flex flex-col items-center">
        <span className="route-loader relative block" aria-hidden="true" />
        <p className="mt-5 type-eyebrow text-maroon-800">
          <LocaleText k="loading.page" />
        </p>
      </div>
    </div>
  );
}
