// ─── Infrastructure Repository: Firebase Category Repository ──────────────────
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseClient";
import type { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import type { Category } from "../../domain/entities/category";

export class FirebaseCategoryRepository implements ICategoryRepository {
  async getAll(): Promise<Category[]> {
    try {
      const ref = doc(db, "categories", "category_list");
      const snap = await getDoc(ref);
      if (!snap.exists()) return [];

      const data = snap.data();
      const list: Category[] = ((data?.list as Category[]) || []).filter(
        (item) => item?.id
      );
      return list;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseCategoryRepository.getAll failed:", err);
      return [];
    }
  }
}

export const firebaseCategoryRepository = new FirebaseCategoryRepository();
