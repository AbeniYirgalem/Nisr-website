// ─── Infrastructure Repository: Algolia Product Repository ────────────────────
import { algoliaClient, ALGOLIA_INDEX } from "../algolia/algoliaClient";
import type { ISearchProductRepository } from "../../domain/repositories/IProductRepository";
import type { ListProduct } from "../../domain/entities/product";
import type { SearchHit } from "../../domain/entities/product";

type AlgoliaSearchResponse = {
  results?: Array<{
    hits?: SearchHit[];
    nbHits?: number;
    page?: number;
    nbPages?: number;
  }>;
};

export class AlgoliaProductRepository implements ISearchProductRepository {
  async search(
    query: string,
    options: Record<string, unknown> = {},
    indexOverride?: string
  ): Promise<{ hits: ListProduct[]; nbHits: number; page?: number; nbPages?: number }> {
    const indexName = indexOverride || ALGOLIA_INDEX;

    if (!algoliaClient || !indexName) {
      return { hits: [], nbHits: 0 };
    }

    try {
      const response = (await (algoliaClient as {
        search(requests: unknown[]): Promise<AlgoliaSearchResponse>;
      }).search([{ indexName, params: { query, ...options } }])) as AlgoliaSearchResponse;

      const result = response?.results?.[0];
      // Return the raw hits so the presentation layer can access all Algolia fields
      return {
        hits: (result?.hits ?? []) as unknown as ListProduct[],
        nbHits: result?.nbHits ?? 0,
        page: result?.page ?? 0,
        nbPages: result?.nbPages ?? 0,
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("AlgoliaProductRepository.search failed:", err);
      return { hits: [], nbHits: 0 };
    }
  }
}

export const algoliaProductRepository = new AlgoliaProductRepository();
