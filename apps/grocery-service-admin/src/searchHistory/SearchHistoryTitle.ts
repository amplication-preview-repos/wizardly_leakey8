import { SearchHistory as TSearchHistory } from "../api/searchHistory/SearchHistory";

export const SEARCHHISTORY_TITLE_FIELD = "productName";

export const SearchHistoryTitle = (record: TSearchHistory): string => {
  return record.productName?.toString() || String(record.id);
};
