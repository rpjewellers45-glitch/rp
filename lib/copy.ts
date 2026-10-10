export type Copy = {
  readonly en: string;
  readonly hi: string;
};

export function c(en: string, hi: string): Copy {
  return { en, hi };
}
