import { IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CartItemInterface } from 'src/cart-item/cartItem.model';
export class CartDto {
    @IsOptional()
    @ApiModelProperty({ required: false, type: String })
    readonly cartItemId: CartItemInterface['_id'];
}