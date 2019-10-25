import { IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class CartDto {
    @IsOptional()
    @ApiModelProperty({ required: true })
    readonly name: string;
    @IsOptional()
    @ApiModelProperty({ required: true })
    readonly price: number;
    @IsOptional()
    @ApiModelProperty({ required: true })
    readonly category: string;
    @IsOptional()
    @ApiModelProperty({ required: false })
    readonly description: string;
}