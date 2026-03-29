// ─── Infrastructure Repository: Firebase Seller Repository ────────────────────
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebaseClient";
import type {
  ISellerRepository,
  SellerProductsPage,
} from "../../domain/repositories/ISellerRepository";
import type { Seller, SellerProduct } from "../../domain/entities/seller";

export class FirebaseSellerRepository implements ISellerRepository {
  async getById(sellerId: string): Promise<Seller | null> {
    try {
      const ref = doc(db, "sellers", sellerId);
      const snap = await getDoc(ref);
      if (!snap.exists()) return null;
      return { id: snap.id, ...(snap.data() as Omit<Seller, "id">) };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseSellerRepository.getById failed:", err);
      return null;
    }
  }

  async getProducts(
    sellerId: string,
    cursor: QueryDocumentSnapshot | null,
    pageSize: number
  ): Promise<SellerProductsPage> {
    try {
      const baseRef = collection(db, "sellers", sellerId, "products");
      let q = query(baseRef, orderBy(documentId()), limit(pageSize));

      if (cursor) {
        q = query(baseRef, orderBy(documentId()), startAfter(cursor), limit(pageSize));
      }

      const snap = await getDocs(q);
      const products: SellerProduct[] = snap.docs.map((docSnap) => {
        const data = docSnap.data() as SellerProduct;
        const price =
          typeof data.price === "number" ? data.price : Number(data.price) || 0;
        return {
          id: data.id ?? docSnap.id,
          desc: data.desc || "",
          img: data.img || "",
          name: data.name || "",
          price,
        };
      });

      const lastDoc =
        snap.docs.length > 0
          ? (snap.docs[snap.docs.length - 1] as QueryDocumentSnapshot)
          : null;

      return {
        products,
        lastDoc,
        hasMore: snap.docs.length === pageSize,
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("FirebaseSellerRepository.getProducts failed:", err);
      return { products: [], lastDoc: null, hasMore: false };
    }
  }
}

export const firebaseSellerRepository = new FirebaseSellerRepository();
