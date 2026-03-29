// ─── Repository Interface: ICategoryRepository ────────────────────────────────
import type { Category } from "../entities/category";

export interface ICategoryRepository {
  getAll(): Promise<Category[]>;
}
