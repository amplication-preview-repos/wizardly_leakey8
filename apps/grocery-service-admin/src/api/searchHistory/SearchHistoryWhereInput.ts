import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SearchHistoryWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  productName?: StringNullableFilter;
};
