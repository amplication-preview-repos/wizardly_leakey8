/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SearchHistory as PrismaSearchHistory } from "@prisma/client";

export class SearchHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SearchHistoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.searchHistory.count(args);
  }

  async searchHistories(
    args: Prisma.SearchHistoryFindManyArgs
  ): Promise<PrismaSearchHistory[]> {
    return this.prisma.searchHistory.findMany(args);
  }
  async searchHistory(
    args: Prisma.SearchHistoryFindUniqueArgs
  ): Promise<PrismaSearchHistory | null> {
    return this.prisma.searchHistory.findUnique(args);
  }
  async createSearchHistory(
    args: Prisma.SearchHistoryCreateArgs
  ): Promise<PrismaSearchHistory> {
    return this.prisma.searchHistory.create(args);
  }
  async updateSearchHistory(
    args: Prisma.SearchHistoryUpdateArgs
  ): Promise<PrismaSearchHistory> {
    return this.prisma.searchHistory.update(args);
  }
  async deleteSearchHistory(
    args: Prisma.SearchHistoryDeleteArgs
  ): Promise<PrismaSearchHistory> {
    return this.prisma.searchHistory.delete(args);
  }
}
