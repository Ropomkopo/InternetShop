import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { CartInterface } from "src/cart/cart.model";


export class UserDto {
    @IsNotEmpty()
    @ApiModelProperty({ required: true })
    readonly name: string;
    @IsNotEmpty()
    @ApiModelProperty({ description: 'User email address', required: false })
    readonly email: string;
    @IsOptional()
    @ApiModelProperty({ required: false })
    readonly age: number;
    @IsOptional()
    @ApiModelProperty({ required: true, type: String })
    readonly cartId: CartInterface['_id'] ;
}