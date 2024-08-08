/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SearchHistoryWhereInput } from "./SearchHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SearchHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SearchHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchHistoryWhereInput)
  @IsOptional()
  @Field(() => SearchHistoryWhereInput, {
    nullable: true,
  })
  every?: SearchHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => SearchHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchHistoryWhereInput)
  @IsOptional()
  @Field(() => SearchHistoryWhereInput, {
    nullable: true,
  })
  some?: SearchHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => SearchHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => SearchHistoryWhereInput)
  @IsOptional()
  @Field(() => SearchHistoryWhereInput, {
    nullable: true,
  })
  none?: SearchHistoryWhereInput;
}
export { SearchHistoryListRelationFilter as SearchHistoryListRelationFilter };
