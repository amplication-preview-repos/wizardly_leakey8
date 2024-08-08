import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("SearchHistoryByBrandDtoObject")
class SearchHistoryByBrandDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    brand!: string;
}

export { SearchHistoryByBrandDto as SearchHistoryByBrandDto };