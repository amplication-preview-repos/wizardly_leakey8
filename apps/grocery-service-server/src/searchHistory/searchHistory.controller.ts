import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchHistoryService } from "./searchHistory.service";
import { SearchHistoryControllerBase } from "./base/searchHistory.controller.base";

@swagger.ApiTags("searchHistories")
@common.Controller("searchHistories")
export class SearchHistoryController extends SearchHistoryControllerBase {
  constructor(protected readonly service: SearchHistoryService) {
    super(service);
  }
}
