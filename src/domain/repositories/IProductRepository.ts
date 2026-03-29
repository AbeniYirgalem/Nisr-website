// ─── Repository Interface: IProductRepository ─────────────────────────────────
import type { ProductDetail, ListProduct, RecommendedProductPage } from "../entities/product";
import type { TrendData } from "../entities/trends";

export interface IProductRepository {
  getById(id: string): Promise<ProductDetail | null>;
  getRecommendedPage(docId: string): Promise<RecommendedProductPage | null>;
  getTrends(): Promise<TrendData | null>;
}

export interface ISearchProductRepository {
  search(
    query: string,
    options?: Record<string, unknown>,
    indexOverride?: string
  ): Promise<{
    hits: ListProduct[];
    nbHits: number;
    page?: number;
    nbPages?: number;
  }>;
}
