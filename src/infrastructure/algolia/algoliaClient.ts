// ─── Infrastructure: Algolia Client ───────────────────────────────────────────
// Moved from src/lib/algolia.ts
import { algoliasearch } from "algoliasearch";

const ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID as string | undefined;
const ALGOLIA_API_KEY = import.meta.env.VITE_ALGOLIA_API_KEY as string | undefined;
export const ALGOLIA_INDEX = import.meta.env.VITE_ALGOLIA_INDEX as string | undefined;

type AlgoliaSearchFn = (appId: string, apiKey: string) => unknown;

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX) {
  // eslint-disable-next-line no-console
  console.warn("Algolia environment variables are not fully configured.");
}

export let algoliaClient: ReturnType<AlgoliaSearchFn> | null = null;

if (ALGOLIA_APP_ID && ALGOLIA_API_KEY) {
  algoliaClient = (algoliasearch as AlgoliaSearchFn)(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
}
