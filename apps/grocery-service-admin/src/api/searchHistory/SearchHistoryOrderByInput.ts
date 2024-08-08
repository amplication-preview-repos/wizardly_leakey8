import { SortOrder } from "../../util/SortOrder";

export type SearchHistoryOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
