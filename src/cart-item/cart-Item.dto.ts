import { IsOptional, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ProductInterface } from '../product/product.model';
export class CartItemDto {
    @IsOptional()
    @ApiModelProperty({ required: true, type: String })
    readonly product: ProductInterface['_id'];
    @IsOptional()
    @ApiModelProperty({ required: true })
    readonly quantity: number;
  }