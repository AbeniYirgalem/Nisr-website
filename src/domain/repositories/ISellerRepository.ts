// ─── Repository Interface: ISellerRepository ──────────────────────────────────
import type { Seller, SellerProduct } from "../entities/seller";
import type { QueryDocumentSnapshot } from "firebase/firestore";

export type SellerProductsPage = {
  products: SellerProduct[];
  lastDoc: QueryDocumentSnapshot | null;
  hasMore: boolean;
};

export interface ISellerRepository {
  getById(sellerId: string): Promise<Seller | null>;
  getProducts(
    sellerId: string,
    cursor: QueryDocumentSnapshot | null,
    pageSize: number
  ): Promise<SellerProductsPage>;
}
