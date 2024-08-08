import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  productName?: StringNullableFilter;
  upc12Number?: IntNullableFilter;
};
