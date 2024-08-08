import { Module } from "@nestjs/common";
import { SearchHistoryModuleBase } from "./base/searchHistory.module.base";
import { SearchHistoryService } from "./searchHistory.service";
import { SearchHistoryController } from "./searchHistory.controller";
import { SearchHistoryResolver } from "./searchHistory.resolver";

@Module({
  imports: [SearchHistoryModuleBase],
  controllers: [SearchHistoryController],
  providers: [SearchHistoryService, SearchHistoryResolver],
  exports: [SearchHistoryService],
})
export class SearchHistoryModule {}
