import * as graphql from "@nestjs/graphql";
import { SearchHistoryResolverBase } from "./base/searchHistory.resolver.base";
import { SearchHistory } from "./base/SearchHistory";
import { SearchHistoryService } from "./searchHistory.service";

@graphql.Resolver(() => SearchHistory)
export class SearchHistoryResolver extends SearchHistoryResolverBase {
  constructor(protected readonly service: SearchHistoryService) {
    super(service);
  }
}
