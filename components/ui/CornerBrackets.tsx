export function CornerBrackets({ className = "border-gold-300/80" }: { className?: string }) {
  const arm = `pointer-events-none absolute z-10 h-4 w-4 ${className}`;
  return (
    <>
      <span aria-hidden="true" className={`${arm} left-2 top-2 border-l border-t`} />
      <span aria-hidden="true" className={`${arm} right-2 top-2 border-r border-t`} />
      <span aria-hidden="true" className={`${arm} bottom-2 left-2 border-b border-l`} />
      <span aria-hidden="true" className={`${arm} bottom-2 right-2 border-b border-r`} />
    </>
  );
}
