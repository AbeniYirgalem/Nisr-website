// Use the main Algolia browser client (v5) which exposes `algoliasearch` as a named export
import { algoliasearch } from "algoliasearch";

const ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID as string | undefined;
const ALGOLIA_API_KEY = import.meta.env.VITE_ALGOLIA_API_KEY as string | undefined;
const ALGOLIA_INDEX = import.meta.env.VITE_ALGOLIA_INDEX as string | undefined;

// algoliasearch v5 exposes `algoliasearch` named export in ESM; this returns a client with `initIndex`
type AlgoliaSearchFn = (appId: string, apiKey: string) => any;

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX) {
  // In dev we don't want to throw; just warn so consumers can handle gracefully.
  // When deploying, ensure these vars are set in Vercel (or your host).
  // eslint-disable-next-line no-console
  console.warn("Algolia environment variables are not fully configured.");
}

let algoliaClient: any = null;
let productsIndex: any = null; // kept for backward compatibility; unused with v5 client

if (ALGOLIA_APP_ID && ALGOLIA_API_KEY) {
  algoliaClient = (algoliasearch as AlgoliaSearchFn)(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
}

export { algoliaClient, productsIndex };

export async function searchProducts(query: string, options: Record<string, any> = {}) {
  if (!algoliaClient || !ALGOLIA_INDEX) {
    return { hits: [], nbHits: 0 };
  }

  try {
    const response = await algoliaClient.search([
      {
        indexName: ALGOLIA_INDEX,
        params: { query, ...options },
      },
    ]);

    const result = response?.results?.[0];
    return {
      hits: result?.hits ?? [],
      nbHits: result?.nbHits ?? 0,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Algolia search error:", error);
    return { hits: [], nbHits: 0 };
  }
}

export type AlgoliaSearchResult = {
  hits: any[];
  nbHits: number;
};
