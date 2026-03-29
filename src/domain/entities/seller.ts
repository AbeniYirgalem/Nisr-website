// ─── Domain Entity: Seller ────────────────────────────────────────────────────
import type { FirestoreTimestamp } from "./product";

export type Seller = {
  id: string;
  lastSeen?: FirestoreTimestamp | null;
  location?: string | null;
  phone?: string | null;
  profileImg?: string | null;
  shopImg?: string | null;
  shopName: string;
  signUpDate?: FirestoreTimestamp | null;
};

export type SellerProduct = {
  id: string;
  name: string;
  img: string;
  price: number;
  desc: string;
};
