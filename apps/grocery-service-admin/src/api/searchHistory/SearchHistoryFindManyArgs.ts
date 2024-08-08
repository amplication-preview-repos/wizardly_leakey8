import { SearchHistoryWhereInput } from "./SearchHistoryWhereInput";
import { SearchHistoryOrderByInput } from "./SearchHistoryOrderByInput";

export type SearchHistoryFindManyArgs = {
  where?: SearchHistoryWhereInput;
  orderBy?: Array<SearchHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
