import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  upc12Number?: SortOrder;
  updatedAt?: SortOrder;
};
