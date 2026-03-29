// ─── Domain Entity: Product ───────────────────────────────────────────────────
// Pure TypeScript – no React, no external library imports.

export type FirestoreTimestamp = { toDate(): Date } | Date;

/** Full product detail (from Firestore `product_details` collection) */
export type ProductDetail = {
  categoryId: string;
  chats: number;
  condition: string;
  desc: string;
  freeDelivery: boolean;
  imgList: string[];
  location: string;
  name: string;
  negotiable: boolean;
  phoneNum: string;
  phoneViews: number;
  postedDate: FirestoreTimestamp;
  price: number;
  sellerId: string;
  score: number;
  shopImage?: string;
  shopName: string;
  signUpDate: FirestoreTimestamp;
  views: number;
};

/** Lightweight product as used in listing / card views */
export type ListProduct = {
  id: string;
  name: string;
  img: string;
  price: number;
  desc: string;
};

/** Algolia search hit – contains additional search-specific fields */
export type SearchHit = {
  objectID?: string;
  objectId?: string;
  documentName?: string;
  document_name?: string;
  _documentName?: string;
  _doc?: string;
  _id?: string;
  id?: string;
  name?: string;
  price?: number | string;
  desc?: string;
  imgList?: string[];
  categoryId?: string;
  category_id?: string;
  category?: string;
  condition?: string;
  freeDelivery?: boolean | null;
  negotiable?: boolean | null;
  [key: string]: unknown;
};

/** Page of recommended products as stored in Firestore */
export type RecommendedProductPage = {
  list: ListProduct[];
  nextDocumentId: string | null;
};
