import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { CategoryInterface } from "src/category/category.model";

export class ProductDto {
    @IsNotEmpty()
    @ApiModelProperty({ required: true })
    readonly name: string;
    @IsNotEmpty()
    @ApiModelProperty({ required: false, type: String })
    readonly category?: CategoryInterface['_id'];
    @IsNotEmpty()
    @ApiModelProperty({ required: true })
    readonly price: number;
    @IsOptional()
    @ApiModelProperty({ required: false })
    readonly description: string
}