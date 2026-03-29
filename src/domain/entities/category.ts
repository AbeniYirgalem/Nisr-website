// ─── Domain Entity: Category ──────────────────────────────────────────────────

export type Category = {
  id: string;
  name: string;
  img?: string;
};

export type CategoryMap = Record<string, Category>;
