import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchHistoryServiceBase } from "./base/searchHistory.service.base";

@Injectable()
export class SearchHistoryService extends SearchHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
