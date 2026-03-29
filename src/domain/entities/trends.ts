// ─── Domain Entity: Trends ────────────────────────────────────────────────────

export type TrendProduct = {
  id: string;
  img: string;
  name: string;
  price: number;
};

export type TrendGroup = {
  category_id: string;
  color: string;
  title: string;
  list: TrendProduct[];
};

export type TrendData = {
  list: TrendGroup[];
};
