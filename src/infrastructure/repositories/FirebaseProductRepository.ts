// ─── Infrastructure Repository: Firebase Product Repository ───────────────────
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseClient";
import type {
  IProductRepository,
} from "../../domain/repositories/IProductRepository";
import type { ProductDetail, RecommendedProductPage } from "../../domain/entities/product";
import type { TrendData } from "../../domain/entities/trends";

export class FirebaseProductRepository implements IProductRepository {
  async getById(id: string): Promise<ProductDetail | null> {
    try {
      const ref = doc(db, "product_details", id);
      const snap = await getDoc(ref);
      if (!snap.exists()) return null;
      return snap.data() as ProductDetail;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseProductRepository.getById failed:", err);
      return null;
    }
  }

  async getRecommendedPage(docId: string): Promise<RecommendedProductPage | null> {
    try {
      const ref = doc(db, "recommended_product_list", docId);
      const snap = await getDoc(ref);
      if (!snap.exists()) return null;
      return snap.data() as RecommendedProductPage;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseProductRepository.getRecommendedPage failed:", err);
      return null;
    }
  }

  async getTrends(): Promise<TrendData | null> {
    try {
      const ref = doc(db, "trends", "home_trend_list");
      const snap = await getDoc(ref);
      if (!snap.exists()) return null;
      return snap.data() as TrendData;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseProductRepository.getTrends failed:", err);
      return null;
    }
  }
}

export const firebaseProductRepository = new FirebaseProductRepository();
